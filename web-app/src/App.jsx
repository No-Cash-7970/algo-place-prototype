import React, { useState, useEffect } from 'react';
import {
  loadStdlib,
  ALGO_PeraConnect,
  ALGO_WalletConnect,
  ALGO_MyAlgoConnect,
} from '@reach-sh/stdlib';
import * as reachBackend from './reach.main.mjs'; // index.main.mjs
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  theme,
  Button,
  HStack,
  Spacer,
  Image,
  Badge,
  Center,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import './App.css';
import NotSignedInDialog from './utils/NotSignedInDialog';
import ChooseWalletDialog from './utils/ChooseWalletDialog';
import poweredByAlgorandLogo from './utils/long_powered_by_algo_all_green.svg'
import { ColorModeSwitcher } from './utils/ColorModeSwitcher';
import CreateGamePage from './pages/CreateGamePage';
import EditGameRulesPage from './pages/EditGameRulesPage';
import PlayGamePage from './pages/PlayGamePage';
import StartPage from './pages/StartPage';
import WatchGamePage from './pages/WatchGamePage';
import NotFoundPage from './pages/NotFoundPage';

// const BASE_DIR_NAME = '/algo-place-prototype';
const BASE_DIR_NAME = '';
const ALGO_APPROX_BLOCK_SPEED = 4.5
const CONTRACT_INFO = {
  extraProgramPages: 1,
  globalNumUint: 0,
  globalNumByteSlice: 11,
  localNumUint: 0,
  localNumByteSlice: 1,
  minContractFund: 100000,
}
const REACH_LIB_ENV = 'ALGO';
const PROVIDER_ENV = 'TestNet';
const PERA_WALLET_FALLBACK = {
  providerEnv: PROVIDER_ENV,
  WalletConnect: ALGO_PeraConnect,
};
const MYALGO_WALLET_FALLBACK = {
  providerEnv: PROVIDER_ENV,
  MyAlgoConnect: ALGO_MyAlgoConnect,
};
const WALLETCONNECT_WALLET_FALLBACK = {
  providerEnv: PROVIDER_ENV,
  WalletConnect: ALGO_WalletConnect,
};

let reachStdlib = loadStdlib(REACH_LIB_ENV);
reachStdlib.setProviderByName(PROVIDER_ENV);

const useLocalStorage = (storageKey, fallbackState) => {
  // Got this function from https://www.robinwieruch.de/local-storage-react/
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

// TODO: [IN REWRITE]: Have some kind of loading indicator somewhere for every time the network is being queried

function App() {
  const [connectingAcct, setConnectingAcct] = useState(false);
  const [account, setAccount] = useState(null);
  const { isOpen: isOpenNotSignedInDialog, onOpen: openNotSignedInDialog, onClose: closeNotSignedInDialog } = useDisclosure();
  const notSignedInDialogMenuRef = React.useRef();
  const { isOpen: isOpenChooseWalletDialog, onOpen: openChooseWalletDialog, onClose: closeChooseWalletDialog } = useDisclosure();
  const chooseWalletCancelDialogMenuRef = React.useRef();
  const [showCoordinates, setShowCoordinates] = useLocalStorage('showCoordinates', false);
  const toast = useToast();
  const [gameState, setGameState] = useState({
    gameName: null,
    colors: ['#FFFFFF', '#777777', '#000000'],
    coolDown: 0,
    board: [
      [0, null], [0, null], [0, null],
      [0, null], [0, null], [0, null],
      [0, null], [0, null], [0, null],
    ],
    startRound: null,
    endRound: null,
    boardWidth: 3,
    boardLength: 3,
    numTiles: 9,
    numPlayers: null,
    maxPlayers: 10,
    gameMaster: null,
  });
  const tools = {
    reachLib: reachStdlib,
    reachBackend,
    chooseWallet,
    shortenWalletAddr,
    processGameState,
    parseBoard,
    getAvgBlockSpeed,
    calculateFutureRoundTime,
    calculateRoundTimeSpan,
    openNotSignedInDialog,
    account,
    setAccount,
    gameState,
    setGameState,
    NETWORK_FETCH_INTERVAL: (getAvgBlockSpeed() * 1.10) * 1000, // Wait ~10% more than the block speed
    getStoredAcct,
    MIN_CONTRACT_FUND: CONTRACT_INFO.minContractFund,
    // Added Game Master's to min balance when they create a game
    GAME_MASTER_MIN_BAL: 100000*(1+CONTRACT_INFO.extraProgramPages) + 28500*CONTRACT_INFO.globalNumUint + 50000*CONTRACT_INFO.globalNumByteSlice,
    // Add to Player's min balance when they join
    PLAYER_MIN_BAL: 100000 + (28500)*CONTRACT_INFO.localNumUint + (50000)*CONTRACT_INFO.localNumByteSlice,
    userLocale: navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language,
  };

  // TODO: [IN REWRITE]: create a function ("getPath()"?) that takes in the appId and returns the correct path according to some keyword. Ex: 'game-play' --> `/game/${appId}/play`, 'home' --> '/'

  async function getStoredAcct() {
    // NOTE: This is only for Pera and WalletConnect.
    // MyAlgo doesn't save sessions, so the wallet connection is lost after page refresh.
    let acct = account;

    if (!account) { // Account hasn't been restored before
      if (localStorage.getItem('walletconnect')) { // WalletConnect session is stored in localStorage
        // We delete the wallet to guarantee we get the wallet we want
        delete window.algorand;
        // We load a fresh stdlib, to clear out any state from before
        reachStdlib = loadStdlib(REACH_LIB_ENV);
        tools.reachLib = reachStdlib;

        reachStdlib.setWalletFallback(reachStdlib.walletFallback(WALLETCONNECT_WALLET_FALLBACK));
        acct = await reachStdlib.getDefaultAccount();
      }
    }

    setAccount(acct);
    return acct;
  };

  function shortenWalletAddr(addr) {
    // Only include the first 4 characters and the last 4 characters of the wallet addres
    return addr.slice(0, 4) + '...' + addr.slice(addr.length - 4, addr.length);
  }

  async function processGameState(gameStateView, stdlib) {
    // TODO: [IN REWRITE]: Try to process metadata stored and throw error if the metadata doesn't exist or is invalid.
    return {
      gameName: decodeURIComponent(trimNull((await gameStateView.gameName())[1]).trim()),
      board: parseBoard((await gameStateView.board())[1], stdlib),
      numPlayers: stdlib.bigNumberToNumber((await gameStateView.numPlayers())[1]),
      maxPlayers: stdlib.bigNumberToNumber((await gameStateView.maxPlayers())[1]),
      boardWidth: stdlib.bigNumberToNumber((await gameStateView.boardWidth())[1]),
      boardLength: stdlib.bigNumberToNumber((await gameStateView.boardLength())[1]),
      colors: (await gameStateView.colors())[1],
      startRound: stdlib.bigNumberToNumber((await gameStateView.startRound())[1]),
      endRound: stdlib.bigNumberToNumber((await gameStateView.endRound())[1]),
      coolDown: stdlib.bigNumberToNumber((await gameStateView.coolDown())[1]),
      gameMaster: stdlib.formatAddress((await gameStateView.gameMaster())[1]),
    };
  }

  function parseBoard(gameStateViewBoard, stdlib) {
    return gameStateViewBoard.map(tile => {
      const parsedTile = [];
      parsedTile[0] = stdlib.bigNumberToNumber(tile[0]);
      parsedTile[1] = tile[1][1] ? stdlib.formatAddress(tile[1][1]) : null;
      return parsedTile;
    });
  }

  function trimNull(string) {
    return string.replace(/\0/g, '');
  }

  async function connectWallet(walletName) {
    // We delete the wallet to guarantee we get the wallet we want
    delete window.algorand;
    // We load a fresh stdlib, to clear out any state from before
    reachStdlib = loadStdlib(REACH_LIB_ENV);
    tools.reachLib = reachStdlib;

    if (walletName === 'pera') {
      setConnectingAcct(true);
      reachStdlib.setWalletFallback(reachStdlib.walletFallback(PERA_WALLET_FALLBACK));
    }

    if (walletName === 'myalgo') {
      setConnectingAcct(true);
      reachStdlib.setWalletFallback(reachStdlib.walletFallback(MYALGO_WALLET_FALLBACK));
    }

    if (walletName === 'walletconnect') {
      reachStdlib.setWalletFallback(reachStdlib.walletFallback(WALLETCONNECT_WALLET_FALLBACK));
    }

    try {
      setAccount(await reachStdlib.getDefaultAccount());
    } catch (error) {
      // NOTE: Pera and MyAlgo throw errors when the user cancels the prompt, WalletConnect doesn't
      console.error(error);
      // For some reason Pera throws an error when connecting the wallet: `TypeError: Cannot read properties of undefined (reading 'substring')` (in Chrome, the error msg is different in Firefox)
      // But it works just fine anyway, so the error shouldn't be displayed to the user.
      if (walletName !== 'pera' || error.message === 'The modal has been closed by the user.') {
        toast({
          title: 'Failed to connect wallet.',
          description: '',
          status: 'error',
          position: 'top',
          isClosable: true,
        });
      }
    } finally {
      setConnectingAcct(false);
    }

    closeNotSignedInDialog();
  }

  async function chooseWallet() { // This is actually a toggle
    if (!account) { // No account has been connected, so we need to connect to an account
      openChooseWalletDialog();
    } else { // When disconnecting wallet
      await window.algorand.disconnect();
      setAccount(null);
    }
  }

  function getAvgBlockSpeed() {
    // TODO: [IN REWRITE] Approximate the average block speed based on the times of the last 10 blocks
    return ALGO_APPROX_BLOCK_SPEED; // This is an approximation
  }

  function calculateFutureRoundTime(round, nowRound) {
    const timeSecDelta = Math.round((round - nowRound) * getAvgBlockSpeed());
    return new Date(Date.now() + timeSecDelta * 1000); // Date() returns milliseconds, we want seconds
  }

  function calculateRoundTimeSpan(rounds) {
    const timeSpanSec = rounds * getAvgBlockSpeed();
    const timeSpanMin = timeSpanSec / 60;
    const timeSpanHr = timeSpanMin / 60;
    const timeSpanDay = timeSpanHr / 24;
    let output = [
      timeSpanSec,
      timeSpanSec === 1 ? 'second' : 'seconds'
    ];

    if (timeSpanSec > 90) { // 90 seconds
      const outputNum = timeSpanMin % 1 ? Number.parseFloat(timeSpanMin).toFixed(1) : Number.parseInt(timeSpanMin);
      output = [
        outputNum,
        outputNum === 1 ? 'minute' : 'minutes'
      ];
    }

    if (timeSpanSec > 3600) { // 1 hour
      const outputNum = timeSpanHr % 1 ? Number.parseFloat(timeSpanHr).toFixed(1) : Number.parseInt(timeSpanHr);
      output = [
        outputNum,
        outputNum === 1 ? 'hour' : 'hours'
      ];
    }

    if (timeSpanSec > 86400) { // 1 day
      const outputNum = timeSpanDay % 1 ? Number.parseFloat(timeSpanDay).toFixed(1) : Number.parseInt(timeSpanDay);
      output = [
        outputNum,
        outputNum === 1 ? 'day' : 'days'
      ];
    }

    return output;
  }

  return (
    <ChakraProvider theme={theme}>
      <Box padding={2} minHeight='100vh'>
        <Box display='flex' marginBottom={8}>
          <Text
            bgGradient='linear(to-r, yellow.400, pink.500, teal.300)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
            display='inline-block'
            justifySelf='flex-start'
          >
            Algo Place Prototype
          </Text>
          <Spacer />
          <Center><Badge variant='outline' fontSize="md" fontWeight="semibold" mr={3} colorScheme='blue'>TestNet</Badge></Center>          <ColorModeSwitcher />
        </Box>

        <Router basename={BASE_DIR_NAME}>
          <HStack spacing={4}>
            <Link as={RouterLink} to='/'>
              <Button colorScheme="yellow">Home</Button>
            </Link>
            { account &&
              <Box fontSize='sm'>
                Connected to {shortenWalletAddr(account.networkAccount.addr)}
              </Box>
            }
          </HStack>
          <Routes>
            <Route exact path="/game/:appId/edit"
              element={ <EditGameRulesPage tools={tools} /> }
            />
            <Route exact path="/game/:appId/play"
              element={
                <PlayGamePage
                  setShowCoordinates={setShowCoordinates}
                  showCoordinates={showCoordinates}
                  tools={tools}
                />
              }
            />
            <Route exact path="/game/:appId"
              element={
                <WatchGamePage
                  setShowCoordinates={setShowCoordinates}
                  showCoordinates={showCoordinates}
                  tools={tools}
                />
              }
            />
            <Route exact path="/game/create"
              element={ <CreateGamePage tools={tools} /> }
            />
            <Route exact path="/"
              element={ <StartPage tools={tools} connectingAcct={connectingAcct} /> }
            />
            <Route path="*" element={<NotFoundPage />} />
            {/* TODO: [IN REWRITE]: Add page for adjusting Algorand network settings */}
          </Routes>

          <NotSignedInDialog
            isOpen={isOpenNotSignedInDialog}
            onClose={closeNotSignedInDialog}
            leastDestructiveRef={notSignedInDialogMenuRef}
            chooseWallet={chooseWallet}
            connectingAcct={connectingAcct}
          />
        </Router>
      </Box>

      <Box padding={4} marginTop={8} borderTop='0.05rem solid'>
        <Image src={poweredByAlgorandLogo} alt='Powered by Algorand' height={8} marginBottom={6} />
        <Text marginBottom={2}>This project is open source. Check out the <Link color='teal.500' href="https://github.com/No-Cash-7970/algo-place-prototype">GitHub repository</Link>.</Text>
        <Text>Made by <Link color='teal.500' href="https://github.com/No-Cash-7970">No-Cash-7970</Link> in 2022.</Text>
      </Box>
      <ChooseWalletDialog
        isOpen={isOpenChooseWalletDialog}
        onClose={closeChooseWalletDialog}
        leastDestructiveRef={chooseWalletCancelDialogMenuRef}
        connectingAcct={connectingAcct}
        connectWallet={connectWallet}
      />
    </ChakraProvider>
  );
}

export default App;
