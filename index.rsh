'reach 0.1';
'use strict';

const BOARD_SIZE = 9;
const BOARD_WIDTH = 3;
const BOARD_LENGTH = 3;
const NUM_COLORS = 3;
const MAX_PLAYERS = 10; // 0 = unlimited
const GAME_NAME_MAX_LENGTH = 128

const TileSetBy = Maybe(Address); // Type: Address or Null
const Tile = Tuple(UInt, TileSetBy); // colorNum,
const Board = Array(Tile, BOARD_SIZE);
const GameRulesInterface = {
  gameName: Bytes(GAME_NAME_MAX_LENGTH),
  startRound: UInt,
  endRound: UInt,
  coolDown: UInt,
  // 1) Order matters. The first color will always be the default/initial color
  // 2) Each item should be a case-insensitive hexidecimal string representing the color (Ex. '#FF00FF' or '#00ff00')
  colors: Array(Bytes(7), NUM_COLORS),
};

const setGameRules = (rules, gameInfoView) => {
  gameInfoView.gameName.set(rules.gameName);
  gameInfoView.colors.set(rules.colors);
  gameInfoView.startRound.set(rules.startRound);
  gameInfoView.endRound.set(rules.endRound);
  gameInfoView.coolDown.set(rules.coolDown);
};
const checkGameRules = (rules) => {
  check(rules.gameName != Bytes(GAME_NAME_MAX_LENGTH).pad(''), 'ERROR: Game name cannot be empty');
  check(rules.startRound < rules.endRound, 'ERROR: The end round cannot be earlier than the start round');
  check(rules.endRound > rules.startRound, 'ERROR: The start round cannot be later than the end round');
  check(rules.coolDown >= 0, 'ERROR: Cool-down period cannot be negative');
};
const isGameMaster = (unknown, knownGameMaster) => {
  check(unknown == knownGameMaster, 'ERROR: Setting game name is only allowed by the game master');
}

export const main = Reach.App(() => {

  setOptions({
    connectors: [ALGO],
    untrustworthyMaps: true,
    // verifyArithmetic: true,
  });

  const Deployer = Participant('Deployer', {
    // gameRules: GameRulesInterfaceStruct,
    ...GameRulesInterface,
    deployed: Fun([], Null),
  });

  const Player = API('Player', { // One who is playing the game
    joinGame: Fun([], UInt), // Args: none; Return: last-played timestamp
    // hasJoinedGame: Fun([], Bool), // Args: none; Return: if player has joined game
    setTile: Fun([UInt, UInt], UInt), // Args: tileNum, colorNum; Return: last-played timestamp
    exitGame: Fun([], Null), // Args: none; Return: nothing
    // getTimestamp: Fun([], UInt), // Args: none; Return: last-played timestamp
  });
  const GameMaster = API('GameMaster', { // The one who can edit the game rules
    resetBoard: Fun([], Null),
    destroyGame: Fun([], Null), // Ends the game contract, so no changes are possible afterwards
    updateGameRules: Fun([
      GameRulesInterface.gameName,
      GameRulesInterface.startRound,
      GameRulesInterface.endRound,
      GameRulesInterface.coolDown,
      GameRulesInterface.colors,
    ], Null),
  });

  const gameState = View('GameState', { // Global game state
    board: Board,
    boardWidth: UInt,
    boardLength: UInt,
    numTiles: UInt,
    gameMaster: Address,
    maxPlayers: UInt,
    numPlayers: UInt,
    ...GameRulesInterface,
  });
  const contractInfoView = View({ // Provides global non-game info
    getPlayerTimestamp: Fun([Address], UInt),
    appInfo: Bytes(33),
  });

  init();

  /*
   * Deploy contract and set up game
   */
  Deployer.only(() => {
    const gameName = declassify(interact.gameName);
    const colors = declassify(interact.colors);
    const startRound = declassify(interact.startRound);
    const endRound = declassify(interact.endRound);
    const coolDown = declassify(interact.coolDown);

    checkGameRules({
      gameName,
      startRound,
      endRound,
      coolDown,
      colors,
    });
  });
  Deployer.publish(
    gameName,
    startRound,
    endRound,
    coolDown,
    colors
  );

  // Initialize board
  const initialBoard = array(Tile, [
    [0, TileSetBy.None()], [0, TileSetBy.None()], [0, TileSetBy.None()],
    [0, TileSetBy.None()], [0, TileSetBy.None()], [0, TileSetBy.None()],
    [0, TileSetBy.None()], [0, TileSetBy.None()], [0, TileSetBy.None()],
  ])
  gameState.board.set(initialBoard);

  /*
   * Set game rules
   */
  gameState.boardWidth.set(BOARD_WIDTH);
  gameState.boardLength.set(BOARD_LENGTH);
  gameState.numTiles.set(BOARD_SIZE);

  const gameMaster = this;

  gameState.gameMaster.set(gameMaster);
  gameState.maxPlayers.set(MAX_PLAYERS);
  gameState.numPlayers.set(0);

  const initGameRules = { // Set of rules that can be changed later
    gameName,
    startRound,
    endRound,
    coolDown,
    colors,
  };

  checkGameRules(initGameRules);
  setGameRules(initGameRules, gameState);

  /*
   * Set up player state
   */
  const playerState = new Map(Object({ // Algorand local state for Player
    lastPlayed: UInt
  }));

  /*
   * Set up view for contract information
   */
  // Player timestamp
  contractInfoView.getPlayerTimestamp.set((addr) => fromSome(playerState[addr], { lastPlayed: 0 }).lastPlayed);
  // Version and other app meta info into one JSON string
  contractInfoView.appInfo.set('{"name":"algo_place","v":"0.0.0"}');

  commit();

  /*
   * Play Game
   */
  Deployer.publish(); // This causes the user to be prompted to approve a transaction

  // Putting this here after that `publish()` above makes for better UX when creating the contract.
  // The user is prompted to approve all necessary transactions before we call this contract "deployed"
  Deployer.interact.deployed();

  const [gameStillAlive, numPlayers, board, gameRules] = parallelReduce([true, 0, initialBoard, initGameRules])
    .invariant(balance() === 0)
    .define(() => {
      gameState.numPlayers.set(numPlayers);
      gameState.board.set(board); // Update board
      setGameRules(gameRules, gameState); // Update game state with any rule changes
    })
    .while(gameStillAlive) // If this while-condition becomes false, the game contract dies
    /*
     * Player
     */
    .api_(Player.joinGame,
      () => {
        check(numPlayers <= MAX_PLAYERS, 'ERROR: Max players reached') // Check max number of players hasn't been reached
        check(isNone(playerState[this]), 'ERROR: A Player cannot join a game more than once'); // Check if player has already joined game

        return [
          (apiReturn) => {
            playerState[this] = { lastPlayed: thisConsensusTime() }; // Set player timestamp with Map
            apiReturn(thisConsensusTime());
            return [
              gameStillAlive,
              numPlayers + 1, // Increment number of players
              board,
              gameRules
            ];
          }
        ]
      }
    )
    .api_(Player.setTile,
      (tileNum, colorNum) => {
        check(tileNum < BOARD_SIZE, 'ERROR: Invalid tile');
        check(colorNum < NUM_COLORS, 'ERROR: Invalid tile color');

        // Timestamp will be 1 (the lowest possible network timestamp) if the player hasn't joined the game
        const storedPlayerTimestamp = fromSome(playerState[this], { lastPlayed: 1 }).lastPlayed;
        check(storedPlayerTimestamp > 1, 'ERROR: Player cannot set tile before joining game'); // Check if player joined game

        return [
          (apiReturn) => {
            const now = thisConsensusTime();

            enforce(now >= gameRules.startRound, 'ERROR: Player cannot play before the game starts'); // Check if game has started
            enforce(now <= gameRules.endRound, 'ERROR: Player cannot play after the game ends'); // Check if game has ended
            enforce( // Check if player has waited the cool-down period
              (storedPlayerTimestamp + gameRules.coolDown) <= now,
              'ERROR: Player must wait the cool-down period before placing a tile'
            );

            // Set tile
            const updatedBoard = board.set(tileNum, [colorNum, TileSetBy.Some(this)]);
            // Update player timestamp
            playerState[this] = {lastPlayed: now};
            apiReturn(now);
            return [gameStillAlive, numPlayers, updatedBoard, gameRules];
          }
        ];
      }
    )
    .api_(Player.exitGame,
      () => {
        check(numPlayers > 0, 'ERROR: Cannot have a negative number of players'); // Check number of players would be below 0 if player exits
        check(isSome(playerState[this]), 'ERROR: A Player cannot exit a game they never joined'); // Check if player has already joined game

        return [
          (apiReturn) => {
            delete playerState[this]; // Remove player timestamp stored in local state
            apiReturn(null);
            return [
              gameStillAlive,
              numPlayers - 1, // Decrement number of players
              board,
              gameRules
            ];
          }
        ];
      }
    )
    /*
     * Game Master
     */
    .api_(GameMaster.destroyGame,
      () => {
        isGameMaster(this, gameMaster);
        return [
          (apiReturn) => {
            apiReturn(null);
            return [false, numPlayers, initialBoard, gameRules]; // End the game forever :(
          }
        ]
      }
    )
    .api_(GameMaster.resetBoard,
      () => {
        isGameMaster(this, gameMaster);

        return [
          (apiReturn) => {
            apiReturn(null);
            return [gameStillAlive, numPlayers, initialBoard, gameRules]; // Reset board to initial board
          }
        ]
      }
    )
    .api_(GameMaster.updateGameRules,
      (newGameName, newStartRound, newEndRound, newCoolDown, newColors) => {
        isGameMaster(this, gameMaster);
        const newGameRules = {
          ...gameRules,
          gameName: newGameName,
          startRound: newStartRound,
          endRound: newEndRound,
          coolDown: newCoolDown,
          colors: newColors,
        };
        checkGameRules(newGameRules);

        return [
          (apiReturn) => {
            apiReturn(null);
            return [gameStillAlive, numPlayers, board, newGameRules];
          }
        ]
      }
    );

  commit();
  exit();
});
