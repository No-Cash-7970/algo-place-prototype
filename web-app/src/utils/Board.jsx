import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  AspectRatio,
  Text,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  HStack,
  Center,
  Spinner,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

function Board(props) {
  return (
      <SimpleGrid
        columns={props.tools.gameState.boardWidth}
        spacing={0}
        borderWidth='.1rem'
      >
        <Tile num={0} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />
        <Tile num={1} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />
        <Tile num={2} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />

        <Tile num={3} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />
        <Tile num={4} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />
        <Tile num={5} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />

        <Tile num={6} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />
        <Tile num={7} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />
        <Tile num={8} tools={props.tools} showCoordinates={props.showCoordinates} gameMode={props.gameMode} appId={props.appId} setPlayerTimestamp={props.setPlayerTimestamp} canPlay={props.canPlay} setDisablePlay={props.setDisablePlay} />
      </SimpleGrid>
  );
}

function Tile(props) {
  const [tileHighlighted, setTileHighlighted] = useState(false);
  const [tileSelected, setTileSelected] = useState(false);
  const [settingTile, setSettingTile] = useState(false);
  const { isOpen: isOpenTileSelectPopover, onClose: closeTileSelectPopover, onOpen: openTileSelectPopover } = useDisclosure();
  const toast = useToast();

  // NOTE: The props.tools.gameState.board may be undefined initially as it loads, so check for that before using it

  function calculateCol(n, numColumns) {
    return n % numColumns;
  }

  function calculateRow(n, numColumns) {
    return Math.floor(n / numColumns);
  }

  function setColor(colorNum, tileNum, appId, account, reachBackend, reachLib) {
    setSettingTile(true);
    props.setDisablePlay(true);
    const approveTxnToast = toast({
      title: 'Approve transaction',
      description: 'Go to your wallet to review and approve the transaction.',
      status: 'warning',
      isClosable: true,
      duration: null,
    });

    const contractHandle = account.contract(reachBackend, appId);
    contractHandle.apis.Player.setTile(tileNum, colorNum)
      .then(async (timestamp) => {
        handleTileSelectPopoverClose();
        // Get new game state
        const newGameState = await props.tools.processGameState(await contractHandle.views.GameState, reachLib);
        props.tools.setGameState(newGameState);
        props.setPlayerTimestamp(reachLib.bigNumberToNumber(timestamp));
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: 'Setting Tile Failed.',
          description: 'Unable to set the tile selected. Check your connection to the Algorand network and try again.',
          status: 'error',
          isClosable: true,
          position: 'top',
        });
      })
      .finally(() => {
        toast.close(approveTxnToast);
        setSettingTile(false);
        props.setDisablePlay(false);
      });
  }

  function handleTileClick() {
    if (props.gameMode === 'play') {
      setTileSelected(true);
    }
  }

  function handleTileSelectPopoverClose(e) {
    closeTileSelectPopover(e);
    setTileSelected(false);
    setTileHighlighted(false);
  }

  return (
    <Popover
      isOpen={isOpenTileSelectPopover}
      onOpen={openTileSelectPopover}
      onClose={handleTileSelectPopoverClose}
    >
      <PopoverTrigger>
        <AspectRatio
          ratio={1}
          onMouseEnter={() => setTileHighlighted(true)}
          onMouseLeave={() => setTileHighlighted(tileSelected)}
          onClick={handleTileClick}
        >
          <Tooltip
            hasArrow
            label={
              (props.tools.gameState.board && props.tools.gameState.board[props.num][1])
                ? props.tools.shortenWalletAddr(props.tools.gameState.board[props.num][1])
                : 'Not Set'
            }
            placement='auto'
            openDelay={1000}
          >
            <Box
              bg={props.tools.gameState.board && props.tools.gameState.colors[props.tools.gameState.board[props.num][0]]}
              boxShadow={tileHighlighted ? 'dark-lg' : ''}
              zIndex={tileHighlighted ? 1 : 'auto'}
              borderWidth={tileHighlighted ? '.25rem' : '0'}
              borderColor={tileHighlighted ? 'white': ''}
              color='black'
            >
              <Box
                bg='rgba(255,255,255,.8)'
                paddingX='.5em'
                paddingY='.25em'
                borderRadius='sm'
                display={(settingTile || props.showCoordinates) ? 'block' : 'none'}
              >
                <Text
                  display={props.showCoordinates ? 'block' : 'none'}
                >
                  ({calculateCol(props.num, props.tools.gameState.boardWidth)}, {calculateRow(props.num, props.tools.gameState.boardWidth)})
                </Text>
                <Spinner display={settingTile ? 'block' : 'none'} m={1}/>
              </Box>
            </Box>
          </Tooltip>
        </AspectRatio>
      </PopoverTrigger>
      {
        props.gameMode === 'play' &&
        (
          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>Set Color</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Center>
                {
                  props.canPlay &&
                  <HStack spacing={4} flexWrap='wrap'>
                    <Box
                      height='2.75rem'
                      width='4.5rem'
                      boxShadow='md'
                      borderRadius='md'
                      borderWidth='.12rem'
                      padding='.3rem'
                      onClick={() => setColor(0, props.num, props.appId, props.tools.account, props.tools.reachBackend, props.tools.reachLib)}
                      _hover={{
                        borderColor: 'blue.500',
                        borderWidth: '.15rem'
                      }}
                    >
                      <Box height='100%' width='100%' bg={props.tools.gameState.colors[0]} borderWidth='.1rem' />
                    </Box>
                    <Box
                      height='2.75rem'
                      width='4.5rem'
                      boxShadow='md'
                      borderRadius='md'
                      borderWidth='.12rem'
                      padding='.3rem'
                      onClick={() => setColor(1, props.num, props.appId, props.tools.account, props.tools.reachBackend, props.tools.reachLib)}
                      _hover={{
                        borderColor: 'blue.500',
                        borderWidth: '.15rem'
                      }}
                    >
                      <Box height='100%' width='100%' bg={props.tools.gameState.colors[1]} borderWidth='.1rem' />
                    </Box>
                    <Box
                      height='2.75rem'
                      width='4.5rem'
                      boxShadow='md'
                      borderRadius='md'
                      borderWidth='.12rem'
                      padding='.3rem'
                      onClick={() => setColor(2, props.num, props.appId, props.tools.account, props.tools.reachBackend, props.tools.reachLib)}
                      _hover={{
                        borderColor: 'blue.500',
                        borderWidth: '.15rem'
                      }}
                    >
                      <Box height='100%' width='100%' bg={props.tools.gameState.colors[2]} borderWidth='.1rem' />
                    </Box>
                  </HStack>
                }
                {
                  !props.canPlay && <Text fontSize='md'>You cannot place another tile at this time.</Text>
                }
              </Center>
            </PopoverBody>
          </PopoverContent>
        )
      }
    </Popover>
  );
}

export default Board;
