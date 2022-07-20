import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  SimpleGrid,
  AspectRatio,
  useToast,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  FormErrorMessage,
  FormControl,
  useDisclosure,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';


function StartPage(props) {
  const [connectingGame, setConnectingGame] = useState(false);
  const [navigateToParts, setNavigateToParts] = useState(null);
  const toast = useToast();
  const { isOpen: isAppIdDialogOpen, onOpen: openAppIdInputDialog, onClose: closeAppIdInputDialog } = useDisclosure();
  const navigate = useNavigate();
  const isgettingStoredAcct = useRef(false); // Prevents more than one check at the same time

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
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.tools]
  );

  function handleAppIdSubmit(values) {
    return new Promise((resolve, reject) => {
      setConnectingGame(true);

      const acctPromise = props.tools.account
        ? new Promise(r => r(props.tools.account)) // Wrap this in a Promise to simplify things because creating a dummy account returns a Promise
        : props.tools.reachLib.createAccount(); // Create a dummy account because Reach doesn't allow access to contract data without an account

      acctPromise.then(async acct => {
        try {
          const gameContractHandle = acct.contract(props.tools.reachBackend, values.appId);
          const gameStateView = await gameContractHandle.views.GameState; // If a contract with the given App ID doesn't exist, an error will be thrown here

          // Get game state
          const gameState = await props.tools.processGameState(gameStateView, props.tools.reachLib); // If the contract is not a game, an error will be thrown here

          props.tools.setGameState(gameState);

          // Finish up
          setConnectingGame(false);
          resolve();
          closeAppIdInputDialog();

          // Go to a different page if necessary
          if (navigateToParts) {
            navigate(navigateToParts[0] + values.appId + navigateToParts[1]);
          }

        } catch (error) {
          console.error(error);
          toast({
            title: 'Loading game failed.',
            description: <>
              <Text>Unable to load the game. This error may be caused by one of the following:</Text>
              <UnorderedList>
                <ListItem>The connection to the Algorand network is not working</ListItem>
                <ListItem>The App ID is invalid</ListItem>
                <ListItem>The App ID is for a contract that is not a game</ListItem>
              </UnorderedList>
            </>,
            status: 'error',
            isClosable: true,
            position: 'top',
            duration: 9000,
          });

          // Finish up
          setConnectingGame(false);
          reject();
        }
      });
    });
  }

  return (
    <>
      <Box marginTop={8}>
        <SimpleGrid
          gridTemplateColumns={{
            base: 'repeat(auto-fit, minmax(10rem, .5fr))',
            md: 'repeat(auto-fit, minmax(10rem, .25fr))',
            xl: 'repeat(auto-fit, minmax(10rem, .12fr))'
          }}
          spacing='1rem'
        >
          <AspectRatio ratio={1}>
            <Button loadingText='Connecting wallet...'
              colorScheme="blue"
              height='100%'
              onClick={() => props.tools.chooseWallet()}
              isLoading={props.connectingAcct}
            >
              {props.tools.account ? 'Disconnect wallet' : 'Connect wallet'}
            </Button>
          </AspectRatio>
          <AspectRatio ratio={1}>
            <Button loadingText='Connecting to game...'
              colorScheme="green"
              height='100%'
              width='100%'
              onClick={(e) => { setNavigateToParts([`/game/`, '']); openAppIdInputDialog(e); }}
              isLoading={connectingGame}
            >
              Watch game
            </Button>
          </AspectRatio>
          <AspectRatio ratio={1} display={(props.tools.account) ? '' : 'none'}>
            <Button loadingText='Connecting to game...'
              colorScheme="pink"
              height='100%'
              width='100%'
              onClick={(e) => { setNavigateToParts(['/game/', '/play/']); openAppIdInputDialog(e); }}
              isLoading={connectingGame}
            >
              Play game
            </Button>
          </AspectRatio>
          <AspectRatio ratio={1} display={props.tools.account ? '' : 'none'}>
            <Button
              colorScheme="pink"
              height='100%'
              width='100%'
              onClick={ () => navigate('/game/create') }
            >
              Create new game
            </Button>
          </AspectRatio>
          <AspectRatio ratio={1} display={(props.tools.account) ? '' : 'none'}>
            <Button loadingText='Connecting to game...'
              colorScheme="pink"
              height='100%'
              width='100%'
              onClick={(e) => { setNavigateToParts(['/game/', '/edit/']); openAppIdInputDialog(e); }}
              isLoading={connectingGame}
            >
              Edit game rules
            </Button>
          </AspectRatio>
        </SimpleGrid>
      </Box>
      <AppIdInputDialog openAppIdInputDialog={openAppIdInputDialog} closeAppIdInputDialog={closeAppIdInputDialog} isAppIdInputDialogOpen={isAppIdDialogOpen} onSubmit={handleAppIdSubmit}/>
    </>
  );
}

function AppIdInputDialog(props) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, },
  } = useForm();
  const appIdField = React.useRef();

  return (
    <Drawer
      placement='bottom'
      onOpen={props.openAppIdInputDialog}
      onClose={props.closeAppIdInputDialog}
      isOpen={props.isAppIdInputDialogOpen}
      initialFocusRef={appIdField}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Connect to Game</DrawerHeader>
        <DrawerBody>
          <form id='app-id-form' onSubmit={handleSubmit(props.onSubmit)}>
            <FormControl isInvalid={errors.appId} isRequired marginTop={8}>
              <Input
                ref={appIdField}
                placeholder='Enter App ID of game...'
                {...register('appId', {
                  pattern: {value: /^[0-9]+$/, message: 'The app ID for the game must be numeric' },
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>
                {errors.appId && errors.appId.message}
              </FormErrorMessage>
            </FormControl>
          </form>
        </DrawerBody>
        <DrawerFooter>
          <Button colorScheme='purple' isLoading={isSubmitting} type='submit' form='app-id-form' marginTop={16}>
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default StartPage;
