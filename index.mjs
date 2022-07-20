'use strict';
import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

async function main() {
  /*
   * Create test wallets
   */
  console.group('Creating wallets...');
  const startingBalance = stdlib.parseCurrency(5);
  const [acctDeployer, acctPlayer1, acctPlayer2] = await stdlib.newTestAccounts(3, startingBalance);

  console.group('Wallets created');
  console.info(`Deployer: ${acctDeployer.networkAccount.addr}`);
  console.info(`Player 1: ${acctPlayer1.networkAccount.addr}`);
  console.info(`Player 2: ${acctPlayer2.networkAccount.addr}`);
  console.groupEnd();

  console.group('Account Balances');
  console.info('Deployer: ', await getBalance(acctDeployer));
  console.info('Player 1: ', await getBalance(acctPlayer1));
  console.info('Player 2: ', await getBalance(acctPlayer2));
  console.groupEnd();

  console.groupEnd(); // For the 'Creating wallets' group

  /*
   * Deploy contract
   */
  console.group('Deploying contract...')
  const ctcDeployer = acctDeployer.contract(backend) // Create contract handle for deployer

  const startBlock = stdlib.bigNumberToNumber(await stdlib.getNetworkTime());

    /*
    * Set initial game rules
    */
  backend.Deployer(ctcDeployer, {
    gameName: 'Some Pixel Game',
    colors: ['#FFFFFF', '#000000', '#00FF00'],
    startRound: startBlock, // start immediately
    endRound: startBlock + 360, // ~30 min from now
    coolDown: 2, // ~8-10 seconds
    deployed: () => {
      console.info('Contract deployed');
      console.groupEnd();
    },
  });
  /*
    * Test Run
    */
  await (async () => {
    console.group('Player 1 is connecting to the contract...');
    const ctcPlayer1 = acctPlayer1.contract(backend, ctcDeployer.getInfo());
    console.info('Connected');
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Player 1 joins game
    console.group('Player 1 is joining the game...');
    console.log('Timestamp:', stdlib.bigNumberToNumber(await ctcPlayer1.apis.Player.joinGame()));
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Get Player 1's timestamp
    console.group("Getting Player 1's timestamp...");
    console.log('Timestamp:', stdlib.bigNumberToNumber((await ctcPlayer1.views.getPlayerTimestamp(acctPlayer1.networkAccount.addr))[1]));
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Player 1 tries to update game name
    console.group('Player 1 is trying to change the game name...');
    try {
      const gameRules = await getGameRules(ctcPlayer1.views.GameState);
      gameRules[0] = "Player 1's Game";
      await ctcPlayer1.apis.GameMaster.updateGameRules(...gameRules);
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Deployer tries to update game name
    console.group('Deployer is changing the game name...');
    try {
      const gameRules = await getGameRules(ctcDeployer.views.GameState);
      gameRules[0] = "Awesome Game";
      await ctcDeployer.apis.GameMaster.updateGameRules(...gameRules);
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Deployer joins game as player
    console.group('Deployer is joining the game as a player...');
    console.log('Timestamp:', stdlib.bigNumberToNumber(await ctcDeployer.apis.Player.joinGame()));
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Player 1 tries to join game again
    console.group('Player 1 is trying to join a game they already joined...');
    try {
      await ctcPlayer1.apis.Player.joinGame();
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Deployer tries to update cool-down time
    console.group('Deployer is changing the cool-down time...');
    try {
      const gameRules = await getGameRules(ctcDeployer.views.GameState);
      gameRules[3] = 5;
      await ctcDeployer.apis.GameMaster.updateGameRules(...gameRules);
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);


    console.group('Player 2 is connecting to the contract...');
    const ctcPlayer2 = acctPlayer2.contract(backend, ctcDeployer.getInfo());
    console.info('Connected');
    console.groupEnd();

    // Player 2 tries to set tile without joining game
    console.group('Player 2 is trying to set a tile without joining game...');
    try {
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer2.apis.Player.setTile(4, 1))); // Set middle tile to black
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();

    await printGameState(ctcPlayer2.views.GameState);

    // Player 1 tries to set tile before cool-down time
    console.group('Player 1 is trying to set a tile before cool-down time...');
    try {
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcPlayer1.views.getPlayerTimestamp(acctPlayer1.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer1.apis.Player.setTile(1, 2))); // Set top-middle tile to green
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Deployer tries to set tile without before cool-down time
    console.group('Deployer (as a player) is trying to set a tile before cool-down time...');
    try {
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcDeployer.views.getPlayerTimestamp(acctDeployer.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcDeployer.apis.Player.setTile(6, 1))); // Set bottom-left tile to black
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Player 2 tries to join game and overwrite Player 1's tile
    console.group("Player 2 is trying to join game and immediately overwrite Player 1's tile...");
    try {
      console.group('Joining game...');
      console.log('Timestamp:', stdlib.bigNumberToNumber(await ctcPlayer2.apis.Player.joinGame()));
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();
    try {
      console.group("Trying to Overwrite Player 1's tile...");
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcPlayer2.views.getPlayerTimestamp(acctPlayer2.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer2.apis.Player.setTile(2, 1))); // Set middle tile to black
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();
    console.groupEnd();

    await printGameState(ctcPlayer2.views.GameState);

    // Player 1 tries to set tile
    console.group('Player 1 is setting a tile...');
    try {
      console.log('Current time:', stdlib.bigNumberToNumber(await stdlib.getNetworkTime()))
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcPlayer1.views.getPlayerTimestamp(acctPlayer1.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer1.apis.Player.setTile(2, 2))); // Set top-right tile to green
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Deployer tries to update colors
    console.group('Deployer is changing the colors...');
    try {
      const gameRules = await getGameRules(ctcDeployer.views.GameState);
      gameRules[4] = ['FFFF00', 'FF0000', '00FF00']; // yellow, red, green
      await ctcDeployer.apis.GameMaster.updateGameRules(...gameRules);
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Deployer tries to overwrite Player 1's tile after cool-down time
    console.group("Deployer is overwriting Player 1's tile (after cool-down)...");
    try {
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcDeployer.views.getPlayerTimestamp(acctDeployer.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcDeployer.apis.Player.setTile(2, 0))); // Set middle tile to red
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Deployer tries to reset the board
    console.group("Deployer is resetting the game board...");
    try {
      await ctcDeployer.apis.GameMaster.resetBoard(); // Reset the board to be entirely yellow (b/c it's the first color in the `colors` array)
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Player 2 tries to exit game and rejoin to reset timestamp
    console.group("Player 2 is trying to exit game and immediately rejoin to set a tile...");
    try {
      console.group('Exiting game...');
      await ctcPlayer2.apis.Player.exitGame();
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();
    try {
      console.group('Rejoining game...');
      console.log('Timestamp:', stdlib.bigNumberToNumber(await ctcPlayer2.apis.Player.joinGame()));
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();
    try {
      console.group('Trying to set a tile before new cool-down time...');
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcPlayer2.views.getPlayerTimestamp(acctPlayer2.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer2.apis.Player.setTile(0, 1))); // Set middle tile to red
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();
    console.groupEnd();

    await printGameState(ctcPlayer2.views.GameState);

    // Deployer tries to change the start round
    console.group("Deployer is changing the start round...");
    try {
      console.log('New start round:', startBlock + 310);
      const gameRules = await getGameRules(ctcDeployer.views.GameState);
      gameRules[1] = startBlock + 310;
      await ctcDeployer.apis.GameMaster.updateGameRules(...gameRules);
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Deployer tries to remove cool-down
    console.group('Deployer is removing the cool-down period...');
    try {
      const gameRules = await getGameRules(ctcDeployer.views.GameState);
      gameRules[3] = 0;
      await ctcDeployer.apis.GameMaster.updateGameRules(...gameRules);
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Player 1 tries to set tile before new start round
    console.group('Player 1 is trying to set a tile before the new start round...');
    try {
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcPlayer1.views.getPlayerTimestamp(acctPlayer1.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer1.apis.Player.setTile(5, 2)));
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Deployer tries to change the start round again
    console.group("Deployer is changing the start round again...");
    try {
      const nowBlock = stdlib.bigNumberToNumber(await stdlib.getNetworkTime());
      console.log('New start round:', nowBlock);
      const gameRules = await getGameRules(ctcDeployer.views.GameState);
      gameRules[1] = nowBlock;
      await ctcDeployer.apis.GameMaster.updateGameRules(...gameRules);
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Player 1 tries to set tile somewhere different
    console.group('Player 1 is setting another tile...');
    try {
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcPlayer1.views.getPlayerTimestamp(acctPlayer1.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer1.apis.Player.setTile(1, 2))); // Set top-middle tile to green
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Deployer tries to change the end round
    console.group("Deployer is changing the end round...");
    try {
      const nowBlock = stdlib.bigNumberToNumber(await stdlib.getNetworkTime());
      console.log('New end round:', nowBlock + 1);
      const gameRules = await getGameRules(ctcDeployer.views.GameState);
      gameRules[1] = nowBlock + 1;
      await ctcDeployer.apis.GameMaster.updateGameRules(...gameRules);
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    await printGameState(ctcDeployer.views.GameState);

    // Player 1 tries to set tile after new end round
    console.group('Player 1 is trying to set a tile after the new end round...');
    try {
      console.log('Old timestamp:', stdlib.bigNumberToNumber((await ctcPlayer1.views.getPlayerTimestamp(acctPlayer1.networkAccount.addr))[1]));
      console.log('New timestamp:', stdlib.bigNumberToNumber(await ctcPlayer1.apis.Player.setTile(5, 2)));
      console.error('SUCCESS (Not supposed to happen)');
    } catch (error) {
      console.info('FAIL (Good)');
    }
    console.groupEnd();

    await printGameState(ctcPlayer1.views.GameState);

    // Deployer tries to destroy game
    console.group("Deployer is taking down the game...");
    try {
      await ctcDeployer.apis.GameMaster.destroyGame();
      console.info('SUCCESS (Good)');
    } catch (error) {
      console.error('FAIL (Not supposed to happen):', error.message);
    }
    console.groupEnd();

    console.info('\n***GAME REDEPLOYED***');
    // NOTE: If a contract has ended and a view is retrieved afterwards, Reach deploys a new contract and returns the view(s) of the new contract
    await printGameState(ctcDeployer.views.GameState);
    console.info('***');

    console.group('\nAccount Balances');
    console.info('Deployer: ', await getBalance(acctDeployer));
    console.info('Player 1: ', await getBalance(acctPlayer1));
    console.info('Player 2: ', await getBalance(acctPlayer2));
    console.groupEnd();
  })();
}

async function getBalance(acct) {
  return stdlib.formatCurrency(await stdlib.balanceOf(acct), 4);
}

function trimNull(string) {
  return string.replace(/\0/g, '');
}

function parseBoard(viewsBoard) {
  return viewsBoard.map(tile => {
    const parsedTile = [];
    parsedTile[0] = stdlib.bigNumberToNumber(tile[0]);
    parsedTile[1] = tile[1][1] ? stdlib.formatAddress(tile[1][1]) : null;
    return parsedTile;
  });
}

async function getGameRules(view) {
  let gameName = (await view.gameName())[1];

  return [
    `${trimNull(gameName).trim()}"`,
    stdlib.bigNumberToNumber((await view.startRound())[1]),
    stdlib.bigNumberToNumber((await view.endRound())[1]),
    stdlib.bigNumberToNumber((await view.coolDown())[1]),
    (await view.colors())[1],
  ];
}

async function printGameState(view) {
  let gameName = (await view.gameName())[1];

  console.group(`Game State of "${trimNull(gameName).trim()}"`);
  console.info('Board:', parseBoard((await view.board())[1]));
  console.info('Number of Players:', stdlib.bigNumberToNumber((await view.numPlayers())[1]));
  console.info('Max Players:', stdlib.bigNumberToNumber((await view.maxPlayers())[1]));
  console.info('Board Width:', stdlib.bigNumberToNumber((await view.boardWidth())[1]));
  console.info('Board Length:', stdlib.bigNumberToNumber((await view.boardLength())[1]));
  console.info('Colors:', (await view.colors())[1]);
  console.info('Start Round:', stdlib.bigNumberToNumber((await view.startRound())[1]));
  console.info('End Round:', stdlib.bigNumberToNumber((await view.endRound())[1]));
  console.info('Cool-Down:', stdlib.bigNumberToNumber((await view.coolDown())[1]));
  console.info('Game Master:', stdlib.formatAddress((await view.gameMaster())[1]));
  console.groupEnd();
}

main();
