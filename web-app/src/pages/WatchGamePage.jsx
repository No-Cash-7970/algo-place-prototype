import React from 'react';
import Game from '../utils/Game';
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Progress,
  Text,
} from '@chakra-ui/react';

function WatchGamePage(props) {
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
        mode='watch'
        appId={useParams().appId}
        tools={props.tools}
      />
    </Box>
  );
}

export default WatchGamePage;
