import React, { useState, useEffect, useRef } from 'react';
import Board from '../utils/Board';
import {
  Grid,
  Center,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  GridItem,
  Box,
  FormControl,
  FormLabel,
  Switch,
  UnorderedList,
  ListItem,
  Text,
  useToast,
  Badge,
  StatHelpText,
  Alert,
  AlertIcon,
  Button,
  Link,
} from '@chakra-ui/react';
import {
  Link as RouterLink,
} from "react-router-dom";

function Game(props) {
  const [currentRound, setCurrentRound] = useState(null);
  const fetchTimer = useRef(null);
  const keepFetching = useRef(true);
  const isFetching = useRef(false); // Prevents more than one fetch at the same time
  const toast = useToast();
  const [disablePlay, setDisablePlay] = useState(false);
  const [approxStartTime, setApproxStartTime] = useState(null);
  const [approxEndTime, setApproxEndTime] = useState(null);

  useEffect(
    () => {
      keepFetching.current = true;

      /*
       * Continuously check and update the game info
       */
      const fetchGameInfo = async () => {
        if (!keepFetching.current || isFetching.current) { // Don't continue if we shouldn't fetch again
          return
        }

        isFetching.current = true;

        /*
         * Get the current round
         */
        setCurrentRound(props.tools.reachLib.bigNumberToNumber(await props.tools.reachLib.getNetworkTime()));

        /*
         * Get the current game state
         */
        const acctPromise = props.tools.account
          ? new Promise(r => r(props.tools.account)) // Wrap this in a Promise to simplify things because creating a dummy account returns a Promise
          : props.tools.reachLib.createAccount(); // Create a dummy account because Reach doesn't allow access to contract data without an account

        acctPromise.then(async acct => {
          try {
            const gameContractHandle = acct.contract(props.tools.reachBackend, props.appId);
            const gameStateView = await gameContractHandle.views.GameState; // If a contract with the given App ID doesn't exist, an error will be thrown here

            // Get game state
            const gameState = await props.tools.processGameState(gameStateView, props.tools.reachLib); // If the contract is not a game, an error will be thrown here
            props.tools.setGameState(gameState);

            isFetching.current = false;
            fetchTimer.current = setTimeout(fetchGameInfo, props.tools.NETWORK_FETCH_INTERVAL); // Fetch again later

          } catch (error) {
            console.error(error);
            toast({
              title: 'Loading game failed',
              description: <>
                <Text mb={2}>Unable to load the game. This error may be caused by one of the following:</Text>
                <UnorderedList>
                  <ListItem>The connection to the Algorand network is not working</ListItem>
                  <ListItem>The App ID is invalid</ListItem>
                  <ListItem>The App ID is for a contract that is not a game</ListItem>
                </UnorderedList>
                <Text mt={4}>Refresh the page after trying to resolve the problem</Text>
              </>,
              status: 'error',
              isClosable: true,
              position: 'top',
              duration: null,
            });

            isFetching.current = false;
            keepFetching.current = false;
          }
        });
      }

      fetchGameInfo();

      return () => { // Clean up
        // Remove timer
        clearTimeout(fetchTimer.current);
        keepFetching.current = false;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.appId]
  );

  useEffect(
    () => {
      setApproxStartTime(props.tools.calculateFutureRoundTime(props.tools.gameState.startRound, currentRound));
      setApproxEndTime(props.tools.calculateFutureRoundTime(props.tools.gameState.endRound, currentRound));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentRound]
  );

  function toggleShowCoordinates() {
    props.setShowCoordinates(!props.showCoordinates);
  }

  function roundsLeftToPlay() {
    return Math.max(0, props.playerTimestamp + props.tools.gameState.coolDown - currentRound);
  }

  return (
    <Box>
      {
        props.tools.gameState.startRound && currentRound < props.tools.gameState.startRound &&
        <Alert status='warning' marginTop={-4} marginBottom={4}>
          <AlertIcon /> This game hasn't started yet
        </Alert>
      }
      {
        props.tools.gameState.endRound && currentRound > props.tools.gameState.endRound &&
        <Alert status='warning' marginTop={-4} marginBottom={4}>
          <AlertIcon /> This game has ended
        </Alert>
      }
      <Center>
        <Grid templateColumns='repeat(12, 1fr)' gap={{base: 4, md: 8}} width={{xl: '65%'}} fontSize={{base: 'xs', md: 'sm', xl: 'lg'}}>
          <GridItem colSpan={7}>
            <Board
              tools={props.tools}
              showCoordinates={props.showCoordinates}
              gameMode={props.mode}
              appId={props.appId}
              setPlayerTimestamp={props.setPlayerTimestamp}
              setDisablePlay={setDisablePlay}
              canPlay={
                roundsLeftToPlay() === 0
                && currentRound >= props.tools.gameState.startRound
                && currentRound <= props.tools.gameState.endRound
                && !disablePlay
              }
            />
          </GridItem>
          <GridItem colSpan={5}>
             {
              props.mode === 'watch' &&
              <Alert status='info' marginBottom={2}>
                <AlertIcon /> Watch only mode
                <Link to={`/game/${props.appId}/play`} as={RouterLink} marginLeft={4}>
                  <Button size='sm'>Play instead</Button>
                </Link>
              </Alert>
            }
            <StatGroup>
              <Stat marginX={4} marginY={2}>
                <StatLabel>Cool-Down Rounds</StatLabel>
                <StatNumber fontSize={{base: 'lg', sm: 'xl'}}>
                  {
                    props.mode === 'play' && props.tools.gameState.coolDown > 0 && `${roundsLeftToPlay()} / `
                  }
                  { (props.tools.gameState.coolDown || props.tools.gameState.coolDown === 0) ? props.tools.gameState.coolDown.toLocaleString() : '???'}
                </StatNumber>
                <StatHelpText mt={1}>
                  { (props.mode === 'play' && roundsLeftToPlay() === 0) ? <Badge colorScheme='green'>Play!</Badge> : '' }
                  { (props.mode === 'play' && roundsLeftToPlay() !== 0) ? <Badge colorScheme='yellow'>Wait</Badge> : '' }
                </StatHelpText>
              </Stat>
              <Stat marginX={4} marginY={2}>
                <StatLabel>Cool-Down Time</StatLabel>
                <StatNumber fontSize={{base: 'lg', sm: 'xl'}}>
                  ~{ Math.round(props.tools.calculateRoundTimeSpan(props.tools.gameState.coolDown)[0])} { props.tools.calculateRoundTimeSpan(Math.round(props.tools.gameState.coolDown))[1] }
                </StatNumber>
                <StatHelpText>
                  {
                    props.mode === 'play' &&
                    <>
                      ~{ Math.round(props.tools.calculateRoundTimeSpan(roundsLeftToPlay())[0]) } { props.tools.calculateRoundTimeSpan(Math.round(roundsLeftToPlay()))[1]} left
                    </>
                    }
                </StatHelpText>
              </Stat>
            </StatGroup>
            <StatGroup>
              <Stat marginX={4} marginY={2}>
                <StatLabel>Current Round</StatLabel>
                <StatNumber fontSize={{base: 'lg', sm: 'xl'}}>{currentRound ? currentRound.toLocaleString() : '???'}</StatNumber>
              </Stat>
              <Stat marginX={4} marginY={2}>
                <StatLabel>Players</StatLabel>
                <StatNumber fontSize={{base: 'lg', sm: 'xl'}}>{props.tools.gameState.numPlayers !== null ? props.tools.gameState.numPlayers : '?'} / {props.tools.gameState.maxPlayers !== null ? props.tools.gameState.maxPlayers : '?'}</StatNumber>
              </Stat>
            </StatGroup>
            <StatGroup>
              <Stat marginX={4} marginY={2}>
                <StatLabel>Game Start Round</StatLabel>
                <StatNumber fontSize={{base: 'lg', sm: 'xl'}}>{props.tools.gameState.startRound ? props.tools.gameState.startRound.toLocaleString() : '???'}</StatNumber>
                <StatHelpText>
                  {
                    approxStartTime &&
                    <>
                      About {approxStartTime.toLocaleDateString()} {approxStartTime.toLocaleTimeString(props.tools.userLocale, {timeZoneName: 'short'})}
                    </>
                  }
                </StatHelpText>
              </Stat>
              <Stat marginX={4} marginY={2}>
                <StatLabel>Game End Round</StatLabel>
                <StatNumber fontSize={{base: 'lg', sm: 'xl'}}>{props.tools.gameState.endRound ? props.tools.gameState.endRound.toLocaleString() : '???'}</StatNumber>
                <StatHelpText>
                  {
                    approxEndTime &&
                    <>
                      About {approxEndTime.toLocaleDateString()} {approxEndTime.toLocaleTimeString(props.tools.userLocale, {timeZoneName: 'short'})}
                    </>
                  }
                </StatHelpText>
              </Stat>
            </StatGroup>
            <FormControl display='flex' alignItems='center' marginY={8}>
              <FormLabel htmlFor='show-coordinates' mb='0'>
                Show coordinates
              </FormLabel>
              <Switch
                id='show-coordinates'
                defaultChecked={props.showCoordinates}
                onChange={toggleShowCoordinates}
              />
            </FormControl>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}

export default Game;
