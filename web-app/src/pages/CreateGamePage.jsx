import React, { useEffect, useRef } from 'react';
import GameRulesForm from '../utils/GameRulesForm';
import {
  Box,
  Heading,
} from '@chakra-ui/react';

function CreateGamePage(props) {
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

        if (!acct) {
          props.tools.openNotSignedInDialog();
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.tools]
  );

  return (
    <Box marginTop={8}>
      <Heading as='h1' textAlign='center' marginBottom={8}>Create a new game</Heading>
      <GameRulesForm
        mode='create'
        tools={props.tools}
      />
    </Box>
  );
}

export default CreateGamePage;
