import React from 'react';
import {
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

function ChooseWalletDialog(props) {

  return (
    <AlertDialog
      isOpen={props.isOpen}
      leastDestructiveRef={props.leastDestructiveRef}
      onClose={props.onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            Choose Wallet
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text marginBottom={4}>Which wallet would you like to use?</Text>
            <Button width='100%' marginY={2} colorScheme='yellow' onClick={(e) => { props.connectWallet('pera'); props.onClose(e);}}>Pera</Button>
            <Button width='100%' marginY={2} colorScheme='blue' onClick={(e) => { props.connectWallet('myalgo'); props.onClose(e); }}>My Algo</Button>
            <Button width='100%' marginY={2} colorScheme='cyan' onClick={(e) => { props.connectWallet('walletconnect'); props.onClose(e); }}>WalletConnect</Button>
            <Button width='100%' marginTop={6} marginBottom={2} ref={props.leastDestructiveRef} onClick={props.onClose}>Cancel</Button>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default ChooseWalletDialog;