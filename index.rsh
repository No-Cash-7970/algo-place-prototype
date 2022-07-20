'reach 0.1';
'use strict';

const BOARD_SIZE = 9;
const BOARD_WIDTH = 3;
const BOARD_LENGTH = 3;
const NUM_COLORS = 3;
const MAX_PLAYERS = 10; // 0 = unlimited
const GAME_NAME_MAX_LENGTH = 64

const TileSetBy = Maybe(Address); // Type: Address or Null
const Tile = Tuple(UInt, TileSetBy); // colorNum,
const Board = Array(Tile, BOARD_SIZE);
const GameRulesInterface = {
    gameName: Bytes(GAME_NAME_MAX_LENGTH),
    // 1) Order matters. The first color will always be the default/initial color
    // 2) Each item should be a case-insensitive hexidecimal string representing the color (Ex. 'FF00FF' or '00ff00')
    colors: Array(Bytes(6), NUM_COLORS),
    startRound: UInt,
    endRound: UInt,
    coolDown: UInt,
};

const setGameRules = (rules, gameInfoView) => {
    gameInfoView.gameName.set(rules.gameName);
    gameInfoView.colors.set(rules.colors);
    gameInfoView.startRound.set(rules.startRound);
    gameInfoView.endRound.set(rules.endRound);
    gameInfoView.coolDown.set(rules.coolDown);
};

const checkGameRules = (rules) => {
    check(rules.gameName != Bytes(64).pad(''), 'ERROR: Game name cannot be empty');
    check(rules.startRound < rules.endRound, 'ERROR: The end round cannot be earlier than the start round');
    check(rules.endRound > rules.startRound, 'ERROR: The start round cannot be later than the end round');
    check(rules.coolDown >= 0, 'ERROR: Cool-down period cannot be negative');
};

const isGameMaster = (unknown, knownGameMaster) => {
    check(unknown == knownGameMaster, 'ERROR: Setting game name is only allowed by the game master');
}

const checkPlayerCanPlay = (playerState, rules, now) => {
    // Timestamp will be 1 (the lowest possible network timestamp) if the player hasn't joined the game
    const storedPlayerTimestamp = fromSome(playerState, { lastPlayed: 1 }).lastPlayed;

    check(storedPlayerTimestamp > 1, 'ERROR: Player cannot set tile before joining game'); // Check if player joined game
    check(now >= rules.startRound, 'ERROR: Player cannot play before the game starts'); // Check if game has started
    check(now <= rules.endRound, 'ERROR: Player cannot play after the game ends'); // Check if game has ended
    check( // Check if player has waited the cool-down period
        (storedPlayerTimestamp + rules.coolDown) <= now,
        'ERROR: Player must wait the cool-down period before placing a tile'
    );
};

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
        setTile: Fun([UInt, UInt], UInt), // Args: tileNum, colorNum; Return: last-played timestamp
        exitGame: Fun([], Null), // Args: none; Return: nothing
    });
    const GameMaster = API('GameMaster', { // The one who can edit the game rules
        resetBoard: Fun([], Null),
        destroyGame: Fun([], Null), // Ends the game contract, so no changes are possible afterwards
        updateGameName: Fun([GameRulesInterface.gameName], Null),
        updateColors: Fun([GameRulesInterface.colors], Null),
        updateStartRound: Fun([GameRulesInterface.startRound], Null),
        updateEndRound: Fun([GameRulesInterface.endRound], Null),
        updateCoolDown: Fun([GameRulesInterface.coolDown], Null),
    });

    const gameInfo = View({ // Global state
        board: Board,
        boardWidth: UInt,
        boardLength: UInt,
        numTiles: UInt,
        gameMaster: Address,
        maxPlayers: UInt,
        numPlayers: UInt,
        ...GameRulesInterface,
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
            colors,
            startRound,
            endRound,
            coolDown,
        });
    });
    Deployer.publish(
        gameName,
        colors,
        startRound,
        endRound,
        coolDown
    );

    // Initialize board
    const initialBoard = array(Tile, [
        [0, TileSetBy.None()], [0, TileSetBy.None()], [0, TileSetBy.None()],
        [0, TileSetBy.None()], [0, TileSetBy.None()], [0, TileSetBy.None()],
        [0, TileSetBy.None()], [0, TileSetBy.None()], [0, TileSetBy.None()],
    ])
    gameInfo.board.set(initialBoard);

    /*
     * Set game rules
     */
    gameInfo.boardWidth.set(BOARD_WIDTH);
    gameInfo.boardLength.set(BOARD_LENGTH);
    gameInfo.numTiles.set(BOARD_SIZE);

    const gameMaster = this;

    gameInfo.gameMaster.set(gameMaster);
    gameInfo.maxPlayers.set(MAX_PLAYERS);
    gameInfo.numPlayers.set(0);

    const initGameRules = { // Set of rules that can be changed later
        gameName,
        colors,
        startRound,
        endRound,
        coolDown,
    };

    checkGameRules(initGameRules);
    setGameRules(initGameRules, gameInfo);

    commit();

    Deployer.interact.deployed();

    /*
     * Play Game
     */
    Deployer.publish();

    const playerState = new Map(Object({ // Algorand local state for Player
        lastPlayed: UInt
    }));

    const [gameStillAlive, numPlayers, board, gameRules] = parallelReduce([true, 0, initialBoard, initGameRules])
        .invariant(balance() === 0)
        .define(() => {
            gameInfo.numPlayers.set(numPlayers);
            gameInfo.board.set(board); // Update board
            setGameRules(gameRules, gameInfo); // Update game state with any rule changes

            const now = lastConsensusTime();
        })
        .while(gameStillAlive) // If this while-condition becomes false, the game contract dies
        /*
         * Player
         */
        .api(Player.joinGame,
            () => {
                check(numPlayers <= MAX_PLAYERS, 'ERROR: Max players reached') // Check max number of players hasn't been reached
                check(isNone(playerState[this]), 'ERROR: A Player cannot join a game more than once'); // Check if player has already joined game
            },
            () => 0,
            (apiReturn) => {
                check(numPlayers <= MAX_PLAYERS, 'ERROR: Max players reached') // Check max number of players hasn't been reached
                check(isNone(playerState[this]), 'ERROR: A Player cannot join a game more than once');

                playerState[this] = { lastPlayed: now }; // Set player timestamp with Map

                apiReturn(now);
                return [
                    gameStillAlive,
                    numPlayers + 1, // Increment number of players
                    board,
                    gameRules
                ];
            }
        )
        .api(Player.setTile,
            (tileNum, colorNum) => {
                check(tileNum < BOARD_SIZE, 'ERROR: Invalid tile');
                check(colorNum < NUM_COLORS, 'ERROR: Invalid tile color');
                checkPlayerCanPlay(playerState[this], gameRules, now);
            },
            (_, _) => 0,
            (tileNum, colorNum, apiReturn) => {
                check(tileNum < BOARD_SIZE, 'ERROR: Invalid tile');
                check(colorNum < NUM_COLORS, 'ERROR: Invalid tile color');
                checkPlayerCanPlay(playerState[this], gameRules, now);

                // Set tile
                const updatedBoard = board.set(tileNum, [colorNum, TileSetBy.Some(this)]);
                // Update player timestamp
                playerState[this] = {lastPlayed: now};

                apiReturn(now);
                return [gameStillAlive, numPlayers, updatedBoard, gameRules];
            }
        )
        .api(Player.exitGame,
            () => {
                check(numPlayers > 0, 'ERROR: Cannot have a negative number of players'); // Check number of players would be below 0 if player exits
                check(isSome(playerState[this]), 'ERROR: A Player cannot exit a game they never joined'); // Check if player has already joined game
            },
            () => 0,
            (apiReturn) => {
                check(numPlayers > 0, 'ERROR: Cannot have a negative number of players'); // Check number of players would be below 0 if player exits
                check(isSome(playerState[this]), 'ERROR: A Player cannot exit a game they never joined'); // Check if player has already joined game

                delete playerState[this]; // Remove player timestamp stored in local state

                apiReturn(null);
                return [
                    gameStillAlive,
                    numPlayers - 1, // Decrement number of players
                    board,
                    gameRules
                ];
            }
        )
        /*
         * Game Master
         */
        .api(GameMaster.destroyGame,
            () => {
                isGameMaster(this, gameMaster);
            },
            () => 0,
            (apiReturn) => {
                isGameMaster(this, gameMaster);

                apiReturn(null);
                return [false, numPlayers, initialBoard, gameRules]; // End the game forever :(
            }
        )
        .api(GameMaster.resetBoard,
            () => {
                isGameMaster(this, gameMaster);
            },
            () => 0,
            (apiReturn) => {
                isGameMaster(this, gameMaster);

                apiReturn(null);
                return [gameStillAlive, numPlayers, initialBoard, gameRules]; // Reset board to initial board
            }
        )
        .api(GameMaster.updateGameName,
            (newGameName) => {
                isGameMaster(this, gameMaster);
                checkGameRules({...gameRules, gameName: newGameName});
            },
            (_) => 0,
            (newGameName, apiReturn) => {
                isGameMaster(this, gameMaster);

                const newGameRules = {...gameRules, gameName: newGameName};
                checkGameRules(newGameRules);

                apiReturn(null);
                return [gameStillAlive, numPlayers, board, newGameRules];
            }
        )
        .api(GameMaster.updateColors,
            (newColors) => {
                isGameMaster(this, gameMaster);
                checkGameRules({...gameRules, colors: newColors});
            },
            (_) => 0,
            (newColors, apiReturn) => {
                isGameMaster(this, gameMaster);

                const newGameRules = {...gameRules, colors: newColors};
                checkGameRules(newGameRules);

                apiReturn(null);
                return [gameStillAlive, numPlayers, board, newGameRules];
            }
        )
        .api(GameMaster.updateStartRound,
            (newStartRound) => {
                isGameMaster(this, gameMaster);
                checkGameRules({...gameRules, startRound: newStartRound});
            },
            (_) => 0,
            (newStartRound, apiReturn) => {
                isGameMaster(this, gameMaster);

                const newGameRules = {...gameRules, startRound: newStartRound};
                checkGameRules(newGameRules);

                apiReturn(null);
                return [gameStillAlive, numPlayers, board, newGameRules];
            }
        )
        .api(GameMaster.updateEndRound,
            (newEndRound) => {
                isGameMaster(this, gameMaster);
                checkGameRules({...gameRules, endRound: newEndRound});
            },
            (_) => 0,
            (newEndRound, apiReturn) => {
                isGameMaster(this, gameMaster);

                const newGameRules = {...gameRules, endRound: newEndRound};
                checkGameRules(newGameRules);

                apiReturn(null);
                return [gameStillAlive, numPlayers, board, newGameRules];
            }
        )
        .api(GameMaster.updateCoolDown,
            (newCoolDown) => {
                isGameMaster(this, gameMaster);
                checkGameRules({...gameRules, coolDown: newCoolDown});
            },
            (_) => 0,
            (newCoolDown, apiReturn) => {
                isGameMaster(this, gameMaster);

                const newGameRules = {...gameRules, coolDown: newCoolDown};
                checkGameRules(newGameRules);

                apiReturn(null);
                return [gameStillAlive, numPlayers, board, newGameRules];
            }
        );

    commit();
    exit();

});
