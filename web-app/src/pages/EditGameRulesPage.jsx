import React, { useEffect, useState, useRef } from 'react';
import GameRulesForm from '../utils/GameRulesForm';
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Progress,
  useToast,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons'


function EditGameRulesPage(props) {
  const params = useParams();
  const shouldLoadGameState = useRef(true);
  const alreadyLoadingGameState = useRef(false); // To prevent double requests
  const [loadingGameState, setLoadingGameState] = useState(true); // A version that updates with the DOM
  const { isOpen: isOpenNotGmDialog, onOpen: openNotGmDialog, onClose: closeNotGmDialog } = useDisclosure();
  const notGmGoToMenuRef = React.useRef()
  const navigate = useNavigate();
  const toast = useToast();
  const [gameDestroyType, setGameDestroyType] = useState(null);
  const { isOpen: isOpenDestroyGameDialog, onOpen: openDestroyGameDialog, onClose: closeDestroyGameDialog } = useDisclosure();
  const destroyGameCancelRef = React.useRef()
  const isgettingStoredAcct = useRef(false); // Prevents more than one check at the same time
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [destroyingGame, setDestroyingGame] = useState(false);

  /*
   * Check if signed in
   */
  useEffect(
    () => {
      if (isgettingStoredAcct.current) {
        return
      }

      isgettingStoredAcct.current = true;

      props.tools.getStoredAcct().then((acct) => {
        isgettingStoredAcct.current = false;

        if (acct) {
          setIsSignedIn(true);
        } else {
          props.tools.openNotSignedInDialog();
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.tools]
  );

  /*
   * Get game info and check if user is Game Master
   */
  useEffect(
    () => {
      const fetchGameInfo = async () => {
        if (alreadyLoadingGameState.current) {
          return;
        }

        alreadyLoadingGameState.current = true;
        setLoadingGameState(true);

        /*
        * Get the current game state
        */
        try {
          const gameContractHandle = props.tools.account.contract(props.tools.reachBackend, params.appId);
          const gameStateView = await gameContractHandle.views.GameState; // If a contract with the given App ID doesn't exist, an error will be thrown here

          // Get game state
          const gameState = await props.tools.processGameState(gameStateView, props.tools.reachLib); // If the contract is not a game, an error will be thrown here
          props.tools.setGameState(gameState);
          alreadyLoadingGameState.current = true;

          return gameState;
        } catch (error) {
          console.error(error);
          alreadyLoadingGameState.current = true;
          if (!isOpenNotGmDialog) { // Don't bother throwing error message if the user isn't the game Master
            toast({
              title: 'Loading game failed.',
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
          }
        }
      }

      shouldLoadGameState.current = true;

      if (isSignedIn) {
        fetchGameInfo().then((gameState) => {
          setLoadingGameState(false);
          /*
          * Check if current account (user) is the Game Master
          */
          if (gameState && !(props.tools.account.networkAccount.addr === gameState.gameMaster)) {
            // Access Denied
            openNotGmDialog();
          }
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSignedIn]
  );

  async function destroyGame(destroyType) {
    const gameContractHandle = props.tools.account.contract(props.tools.reachBackend, params.appId);
    const gameMasterApi = gameContractHandle.apis.GameMaster;
    const approveTxnToast = toast({
      title: 'Approve transaction',
      description: 'Go to your wallet to review and approve the transaction.',
      status: 'warning',
      isClosable: true,
      duration: null,
    });
    setDestroyingGame(true);

    if (destroyType === 'reset') {
      try {
        await gameMasterApi.resetBoard();
        toast({
          title: 'Game board reset.',
          description: <>
            <Text mb={2}>The game board has been successfully reset.</Text>
          </>,
          status: 'success',
          isClosable: true,
          position: 'top',
          duration: 9000,
        });
      } catch (error) {
        console.error(error);
        toast({
          title: 'Game board reset failed.',
          description: <>
            <Text mb={2}>Unable to reset the game. This error may be caused by one of the following:</Text>
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
      } finally {
        toast.close(approveTxnToast);
        setDestroyingGame(false);
      }

      setGameDestroyType(null);
      closeDestroyGameDialog();
    }

    if (destroyType === 'delete') {
      try {
        await gameMasterApi.destroyGame();
        toast({
          title: 'Game deleted.',
          description: <>
            <Text mb={2}>The game has been successfully deleted.</Text>
          </>,
          status: 'success',
          isClosable: true,
          position: 'top',
          duration: 9000,
        });
        closeDestroyGameDialog();
        navigate('/');
      } catch (error) {
        console.error(error);
        toast({
          title: 'Game deletion failed.',
          description: <>
            <Text mb={2}>Unable to delete the game. This error may be caused by one of the following:</Text>
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
      } finally {
        toast.close(approveTxnToast);
        setDestroyingGame(false);
        setGameDestroyType(null);
      }
    }
  }

  return (
    <Box marginTop={8}>
      <Box marginBottom={4}>
        <Button colorScheme='red' variant='outline' marginX={1} onClick={(e) => {setGameDestroyType('reset'); openDestroyGameDialog(e)}}>Reset game board</Button>
        <Button colorScheme='red' variant='ghost' marginX={1} onClick={(e) => {setGameDestroyType('delete'); openDestroyGameDialog(e)}}>Delete this game</Button>
      </Box>
      <Heading as='h1' noOfLines={1} textAlign='center' marginBottom={8} width='100%'>
        { loadingGameState && <><Text>Loading...</Text><Progress size='md' isIndeterminate /></> }
        { !loadingGameState && <>Edit Rules for {props.tools.gameState.gameName || <i>Untitled Game</i>}</> }
      </Heading>
      {
        !loadingGameState &&
        <GameRulesForm
          mode='edit'
          tools={props.tools}
          appId={params.appId}
        />
      }

      {/* Dialog for when the user is not the Game Master */}
      <AlertDialog
        isOpen={isOpenNotGmDialog}
        leastDestructiveRef={notGmGoToMenuRef}
        onClose={closeNotGmDialog}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              Access Denied.
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>You cannot update this game's rules because you are not the Game Master.</Text>
              <Text marginTop={2}>Game Master: {props.tools.gameState && props.tools.gameState.gameMaster}</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme='orange' ref={notGmGoToMenuRef} onClick={() => navigate(`/`)}>
                Go to menu
              </Button>
              <Button colorScheme='orange' onClick={() => navigate(`/game/${params.appId}`)} ml={3}>
                Watch game instead
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Dialog for resetting the game board or destroying the game */}
      <AlertDialog
        isOpen={isOpenDestroyGameDialog}
        leastDestructiveRef={destroyGameCancelRef}
        onClose={closeDestroyGameDialog}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              <WarningIcon w={8} h={8} mr={4} color="red.500" />
              <Text as='span' verticalAlign='middle'>
                {
                gameDestroyType === 'reset' ? 'Reset the game board?' : 'Permanently delete this game?'
              }
              </Text>
            </AlertDialogHeader>

            <AlertDialogBody>
              {
                gameDestroyType === 'reset'
                  ? <>
                    <Text mb={4}>
                      Do you want to reset this game?
                    </Text>
                    <Text mb={4}>
                      This action will clear and reset the entire game board.
                      All tiles set will be cleared and the board will be as if no one has played the game.
                      This action only affects the game board. None of the rules will be changed and all players who joined the game will remain in the game.
                    </Text>
                    </>
                  : <>
                    <Text>
                      Do you want to permanently delete this game? After this game is deleted, players who joined the game will not be able to access the game and play.
                    </Text>
                    <Text marginY={4} fontSize='sm'>
                      Your minimum balance will decrease by {props.tools.reachLib.formatCurrency(props.tools.GAME_MASTER_MIN_BAL)} Algos
                    </Text>
                  </>
              }
              <Text><strong>WARNING: This action cannot be undone.</strong></Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={destroyGameCancelRef} onClick={closeDestroyGameDialog} disabled={destroyingGame}>
                Cancel
              </Button>
              <Button colorScheme='red'  isLoading={destroyingGame} onClick={() => destroyGame(gameDestroyType) } ml={3}>
                { gameDestroyType === 'reset' ? 'Reset game board' : 'Delete game' }
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    </Box>
  );
}

export default EditGameRulesPage;
