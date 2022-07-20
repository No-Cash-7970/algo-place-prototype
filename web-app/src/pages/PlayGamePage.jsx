import React, { useState, useEffect, useRef } from 'react';
import Game from '../utils/Game';
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Progress,
  Text,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast,
} from '@chakra-ui/react';

function PlayGamePage(props) {
  const params = useParams();
  const [playerTimestamp, setPlayerTimestamp] = useState(null);
  const shouldCheckHasJoined = useRef(true);
  const isCheckingHasJoined = useRef(false); // Prevents more than one check at the same time
  const [hasJoined, setHasJoined] = useState(false);
  const { isOpen: isOpenJoinGameDialog, onOpen: openJoinGameDialog, onClose: closeJoinGameDialog } = useDisclosure();
  const joinGameDialogCancelRef = React.useRef()
  const { isOpen: isOpenConfirmExitGameDialog, onOpen: openConfirmExitGameDialog, onClose: closeConfirmExitGameDialog } = useDisclosure();
  const confirmExitGameDialogCancelRef = React.useRef();
  const navigate = useNavigate();
  const toast = useToast();
  const isgettingStoredAcct = useRef(false); // Prevents more than one check at the same time
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [doingAction, setDoingAction] = useState(false);

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
          props.tools.openNotSignedInDialog()
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.tools]
  );

  /*
   * Check if joined game
   */
  useEffect(
    () => {
      if (props.tools.account) {
        shouldCheckHasJoined.current = true;

        const checkHasJoined = async () => {
          if (isCheckingHasJoined.current) {
            return;
          }

          isCheckingHasJoined.current = true;

          const contractHandle = props.tools.account.contract(props.tools.reachBackend, params.appId);
          const timestamp = props.tools.reachLib.bigNumberToNumber(
            (await contractHandle.views.getPlayerTimestamp(props.tools.account.networkAccount.addr))[1]
          );
          const playerJoined = timestamp > 0;

          setPlayerTimestamp(playerJoined ? timestamp : null);
          setHasJoined(playerJoined);

          if (!playerJoined) { // Using a new variable instead of the `hasJoined` state because `hasJoined` may not have been completely updated yet
            openJoinGameDialog();
          }

          isCheckingHasJoined.current = false;
        };

        checkHasJoined();
      }

      return () => {
        shouldCheckHasJoined.current = false
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSignedIn]
  );

  async function joinGame(appId, account, reachBackend) {
    setDoingAction(true);
    const approveTxnToast = toast({
      title: 'Approve transaction',
      description: 'Go to your wallet to review and approve the transaction.',
      status: 'warning',
      isClosable: true,
      duration: null,
    });

    account.contract(reachBackend, appId).apis.Player.joinGame()
      .then((timestamp) => {
        setHasJoined(true);
        setPlayerTimestamp(props.tools.reachLib.bigNumberToNumber(timestamp));
        toast({
          title: 'Joined Game',
          description: <Text>
            You have successfully joined this game. If the game has already started,
            you can play after the cool-down period. If the game hasn't started yet,
            you must wait until it starts and after your cool-down period.
          </Text>,
          status: 'success',
          isClosable: true,
          position: 'top',
          duration: 9000,
        });

        closeJoinGameDialog();
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: 'Failed to Join Game.',
          description: 'Unable to join the game. Check your connection to the Algorand network and try again.',
          status: 'error',
          isClosable: true,
        });
      })
      .finally(() => {
        toast.close(approveTxnToast);
        setDoingAction(false);
      });
  }

  async function exitGame(appId, account, reachBackend) {
    setDoingAction(true);
    const approveTxnToast = toast({
      title: 'Approve transaction',
      description: 'Go to your wallet to review and approve the transaction.',
      status: 'warning',
      isClosable: true,
      duration: null,
    });

    account.contract(reachBackend, appId).apis.Player.exitGame()
      .then(() => {
        setHasJoined(false);
        setPlayerTimestamp(null)
        toast({
          title: 'Unjoined Game',
          description: <Text>
            You have successfully unjoined this game. If you want to play this game again, you will have to rejoin the game.
          </Text>,
          status: 'success',
          isClosable: true,
          position: 'top',
          duration: 9000,
        });
        navigate(`/game/${params.appId}`);
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: 'Failed to Unjoin Game.',
          description: 'Unable to unjoin the game. Check your connection to the Algorand network and try again.',
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      })
      .finally(() => {
        toast.close(approveTxnToast);
        setDoingAction(false);
      });
  }

  return (
    <Box marginTop={8}>
      <Heading as='h1' noOfLines={1} textAlign='center' marginBottom={8}>
        {
          (props.tools.gameState.gameName || props.tools.gameState.gameName === '')
            ? (props.tools.gameState.gameName === '' ? '<Untitled>' : props.tools.gameState.gameName)
            : <><Text>Loading...</Text> <Progress size='md' isIndeterminate /></>
        }
      </Heading>
      <Game
        setShowCoordinates={props.setShowCoordinates}
        showCoordinates={props.showCoordinates}
        mode='play'
        appId={params.appId}
        playerTimestamp={playerTimestamp}
        setPlayerTimestamp={setPlayerTimestamp}
        tools={props.tools}
      />
      {
        // Button for exiting (unjoining) game
        hasJoined &&
        <Button onClick={openConfirmExitGameDialog} mt={4}>
          Unjoin Game
        </Button>
      }

      {/* Dialog for joining a game */}
      <AlertDialog
        isOpen={isOpenJoinGameDialog}
        leastDestructiveRef={joinGameDialogCancelRef}
        onClose={closeJoinGameDialog}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              Join Game?
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text>You haven't joined this game. Before you can play a game, you must join it.</Text>
              <Text marginTop={4}>Would you like to join the game?</Text>
              <Text marginTop={4} fontSize='sm'>Your minimum balance will increase by {props.tools.reachLib.formatCurrency(props.tools.PLAYER_MIN_BAL)} Algos</Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={joinGameDialogCancelRef} disabled={doingAction} onClick={() => navigate(`/game/${params.appId}`)}>
                Watch game instead
              </Button>
              <Button colorScheme='orange' isLoading={doingAction} onClick={() => joinGame(params.appId, props.tools.account, props.tools.reachBackend)} ml={3}>
                Join game
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Dialog for exiting (unjoining) a game */}
      <AlertDialog
        isOpen={isOpenConfirmExitGameDialog}
        leastDestructiveRef={confirmExitGameDialogCancelRef}
        onClose={closeConfirmExitGameDialog}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>
              Unjoin Game?
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text>Are you sure you want to unjoin the game?</Text>
              <Text marginTop={4}>After unjoining the game, you will not be able to play the game until you rejoin.</Text>
              <Text marginTop={4} fontSize='sm'>Your minimum balance will decrease by {props.tools.reachLib.formatCurrency(props.tools.PLAYER_MIN_BAL)} Algos</Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={confirmExitGameDialogCancelRef} onClick={closeConfirmExitGameDialog} disabled={doingAction}>
                Cancel
              </Button>
              <Button colorScheme='red' isLoading={doingAction} onClick={() => exitGame(params.appId, props.tools.account, props.tools.reachBackend)} ml={3}>
                Unjoin game
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

    </Box>
  );
}

export default PlayGamePage;
