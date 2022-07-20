import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

function NotSignedInDialog(props) {
  const navigate = useNavigate();

  return (
    <AlertDialog
      isOpen={props.isOpen}
      leastDestructiveRef={props.leastDestructiveRef}
      onClose={props.onClose}
      closeOnOverlayClick={false}
      closeOnEsc={false}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>
            Not signed in
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>You cannot access this page without signing in.</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={props.leastDestructiveRef} onClick={() => {navigate('/'); props.onClose(); }}>
              Go to Home
            </Button>
            <Button
              colorScheme='blue'
              onClick={ () => props.chooseWallet() }
              ml={3}
              isLoading={props.connectingAcct}
            >
              Connect wallet
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default NotSignedInDialog;