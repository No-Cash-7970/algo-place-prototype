// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc0
    });
  const ctc8 = stdlib.T_Tuple([ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc10 = stdlib.T_Object({
    colors: ctc4,
    coolDown: ctc2,
    endRound: ctc2,
    gameName: ctc1,
    startRound: ctc2
    });
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '33'));
  const ctc12 = stdlib.T_Object({
    lastPlayed: ctc2
    });
  const ctc13 = stdlib.T_Data({
    None: ctc6,
    Some: ctc12
    });
  const map0_ctc = ctc13;
  
  
  const _appInfo = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        const v1774 = '{"name":"algo_place","v":"0.0.0"}';
        
        return v1774;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        const v1774 = '{"name":"algo_place","v":"0.0.0"}';
        
        return v1774;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _getPlayerTimestamp = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async (_v1769 ) => {
          const v1769 = stdlib.protect(ctc0, _v1769, null);
        
        const v1770 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1769), null);
        const v1771 = {
          lastPlayed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1772 = stdlib.fromSome(v1770, v1771);
        const v1773 = v1772.lastPlayed;
        
        return v1773;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async (_v1769 ) => {
          const v1769 = stdlib.protect(ctc0, _v1769, null);
        
        const v1770 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1769), null);
        const v1771 = {
          lastPlayed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v1772 = stdlib.fromSome(v1770, v1771);
        const v1773 = v1772.lastPlayed;
        
        return v1773;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_board = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        const v1732 = ['None', null];
        const v1733 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1732];
        const v1750 = [v1733, v1733, v1733, v1733, v1733, v1733, v1733, v1733, v1733];
        
        return v1750;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1800;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_boardLength = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, '3');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_boardWidth = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, '3');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, '3');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_colors = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return v1729;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1968;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_coolDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return v1728;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1974;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_endRound = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return v1727;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1973;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_gameMaster = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return v1724;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1724;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_gameName = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return v1725;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1967;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_maxPlayers = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '10');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '10');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_numPlayers = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:136:28:decimal', stdlib.UInt_max, '0');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1803;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_numTiles = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:4:20:decimal', stdlib.UInt_max, '9');}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:4:20:decimal', stdlib.UInt_max, '9');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const GameState_startRound = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1724, v1725, v1726, v1727, v1728, v1729, v1755] = svs;
      return (await ((async () => {
        
        
        return v1726;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = svs;
      return (await ((async () => {
        
        
        return v1972;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      GameState: {
        board: {
          decode: GameState_board,
          dom: [],
          rng: ctc9
          },
        boardLength: {
          decode: GameState_boardLength,
          dom: [],
          rng: ctc2
          },
        boardWidth: {
          decode: GameState_boardWidth,
          dom: [],
          rng: ctc2
          },
        colors: {
          decode: GameState_colors,
          dom: [],
          rng: ctc4
          },
        coolDown: {
          decode: GameState_coolDown,
          dom: [],
          rng: ctc2
          },
        endRound: {
          decode: GameState_endRound,
          dom: [],
          rng: ctc2
          },
        gameMaster: {
          decode: GameState_gameMaster,
          dom: [],
          rng: ctc0
          },
        gameName: {
          decode: GameState_gameName,
          dom: [],
          rng: ctc1
          },
        maxPlayers: {
          decode: GameState_maxPlayers,
          dom: [],
          rng: ctc2
          },
        numPlayers: {
          decode: GameState_numPlayers,
          dom: [],
          rng: ctc2
          },
        numTiles: {
          decode: GameState_numTiles,
          dom: [],
          rng: ctc2
          },
        startRound: {
          decode: GameState_startRound,
          dom: [],
          rng: ctc2
          }
        },
      appInfo: {
        decode: _appInfo,
        dom: [],
        rng: ctc11
        },
      getPlayerTimestamp: {
        decode: _getPlayerTimestamp,
        dom: [ctc0],
        rng: ctc2
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc4, ctc5],
      4: [ctc0, ctc5, ctc9, ctc9, ctc10, ctc2, ctc1, ctc4, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc6, ctc1, ctc1, ctc1, ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc10 = stdlib.T_Data({
    GameMaster_destroyGame0_418: ctc7,
    GameMaster_resetBoard0_418: ctc7,
    GameMaster_updateGameRules0_418: ctc8,
    Player_exitGame0_418: ctc7,
    Player_joinGame0_418: ctc7,
    Player_setTile0_418: ctc9
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Digest;
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v1700 = stdlib.protect(ctc5, interact.colors, 'for Deployer\'s interact field colors');
  const v1704 = stdlib.protect(ctc1, interact.coolDown, 'for Deployer\'s interact field coolDown');
  const v1705 = stdlib.protect(ctc1, interact.endRound, 'for Deployer\'s interact field endRound');
  const v1706 = stdlib.protect(ctc6, interact.gameName, 'for Deployer\'s interact field gameName');
  const v1707 = stdlib.protect(ctc1, interact.startRound, 'for Deployer\'s interact field startRound');
  
  const v1711 = '                                                                                                                                ';
  const v1712 = stdlib.digest([ctc6], [v1706]);
  const v1714 = stdlib.digest([ctc6], [v1711]);
  const v1715 = stdlib.digestEq(v1712, v1714);
  const v1716 = v1715 ? false : true;
  stdlib.assert(v1716, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:19:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:94:16:application call to [unknown function] (defined at: ./index.rsh:94:20:function exp)'],
    msg: 'ERROR: Game name cannot be empty',
    who: 'Deployer'
    });
  const v1718 = stdlib.lt(v1707, v1705);
  stdlib.assert(v1718, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:33:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:19:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:94:16:application call to [unknown function] (defined at: ./index.rsh:94:20:function exp)'],
    msg: 'ERROR: The end round cannot be earlier than the start round',
    who: 'Deployer'
    });
  const v1720 = stdlib.gt(v1705, v1707);
  stdlib.assert(v1720, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:34:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:19:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:94:16:application call to [unknown function] (defined at: ./index.rsh:94:20:function exp)'],
    msg: 'ERROR: The start round cannot be later than the end round',
    who: 'Deployer'
    });
  const v1722 = stdlib.ge(v1704, stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1722, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:19:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:94:16:application call to [unknown function] (defined at: ./index.rsh:94:20:function exp)'],
    msg: 'ERROR: Cool-down period cannot be negative',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1706, v1707, v1705, v1704, v1700],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:109:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc1, ctc1, ctc1, ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:109:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1725, v1726, v1727, v1728, v1729], secs: v1731, time: v1730, didSend: v110, from: v1724 } = txn1;
      
      ;
      const v1752 = '                                                                                                                                ';
      const v1755 = stdlib.digest([ctc6], [v1752]);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1725, v1726, v1727, v1728, v1729], secs: v1731, time: v1730, didSend: v110, from: v1724 } = txn1;
  ;
  const v1752 = '                                                                                                                                ';
  const v1753 = stdlib.digest([ctc6], [v1725]);
  const v1755 = stdlib.digest([ctc6], [v1752]);
  const v1756 = stdlib.digestEq(v1753, v1755);
  const v1757 = v1756 ? false : true;
  stdlib.assert(v1757, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:146:17:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)'],
    msg: 'ERROR: Game name cannot be empty',
    who: 'Deployer'
    });
  const v1759 = stdlib.lt(v1726, v1727);
  stdlib.assert(v1759, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:33:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:146:17:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)'],
    msg: 'ERROR: The end round cannot be earlier than the start round',
    who: 'Deployer'
    });
  const v1761 = stdlib.gt(v1727, v1726);
  stdlib.assert(v1761, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:34:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:146:17:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)'],
    msg: 'ERROR: The start round cannot be later than the end round',
    who: 'Deployer'
    });
  const v1763 = stdlib.ge(v1728, stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1763, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:146:17:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)'],
    msg: 'ERROR: Cool-down period cannot be negative',
    who: 'Deployer'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v1724, v1725, v1726, v1727, v1728, v1729, v1755],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1730,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:169:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1777, time: v1776, didSend: v216, from: v1775 } = txn2;
      
      ;
      
      const v1780 = ['None', null];
      const v1781 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1780];
      const v1798 = [v1781, v1781, v1781, v1781, v1781, v1781, v1781, v1781, v1781];
      const v1799 = {
        colors: v1729,
        coolDown: v1728,
        endRound: v1727,
        gameName: v1725,
        startRound: v1726
        };
      const v1800 = v1798;
      const v1801 = v1799;
      const v1802 = true;
      const v1803 = stdlib.checkedBigNumberify('./index.rsh:175:80:decimal', stdlib.UInt_max, '0');
      const v1804 = v1776;
      
      if (await (async () => {
        
        return v1802;})()) {
        const v1967 = v1801.gameName;
        const v1968 = v1801.colors;
        const v1972 = v1801.startRound;
        const v1973 = v1801.endRound;
        const v1974 = v1801.coolDown;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc6, ctc1, ctc1, ctc1, ctc5, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1777, time: v1776, didSend: v216, from: v1775 } = txn2;
  ;
  const v1778 = stdlib.addressEq(v1724, v1775);
  stdlib.assert(v1778, {
    at: './index.rsh:169:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  stdlib.protect(ctc0, await interact.deployed(), {
    at: './index.rsh:173:29:application',
    fs: ['at ./index.rsh:173:29:application call to [unknown function] (defined at: ./index.rsh:173:29:function exp)', 'at ./index.rsh:173:29:application call to "liftedInteract" (defined at: ./index.rsh:173:29:application)'],
    msg: 'deployed',
    who: 'Deployer'
    });
  
  const v1780 = ['None', null];
  const v1781 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1780];
  const v1798 = [v1781, v1781, v1781, v1781, v1781, v1781, v1781, v1781, v1781];
  const v1799 = {
    colors: v1729,
    coolDown: v1728,
    endRound: v1727,
    gameName: v1725,
    startRound: v1726
    };
  let v1800 = v1798;
  let v1801 = v1799;
  let v1802 = true;
  let v1803 = stdlib.checkedBigNumberify('./index.rsh:175:80:decimal', stdlib.UInt_max, '0');
  let v1804 = v1776;
  
  while (await (async () => {
    
    return v1802;})()) {
    const v1967 = v1801.gameName;
    const v1968 = v1801.colors;
    const v1972 = v1801.startRound;
    const v1973 = v1801.endRound;
    const v1974 = v1801.coolDown;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn3;
    switch (v2115[0]) {
      case 'GameMaster_destroyGame0_418': {
        const v2118 = v2115[1];
        undefined /* setApiDetails */;
        ;
        const v2130 = stdlib.addressEq(v2114, v1724);
        stdlib.assert(v2130, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
          msg: 'ERROR: Setting game name is only allowed by the game master',
          who: 'Deployer'
          });
        const v2132 = null;
        await txn3.getOutput('GameMaster_destroyGame', 'v2132', ctc0, v2132);
        const cv1800 = v1798;
        const cv1801 = v1801;
        const cv1802 = false;
        const cv1803 = v1803;
        const cv1804 = v2116;
        
        v1800 = cv1800;
        v1801 = cv1801;
        v1802 = cv1802;
        v1803 = cv1803;
        v1804 = cv1804;
        
        continue;
        break;
        }
      case 'GameMaster_resetBoard0_418': {
        const v2344 = v2115[1];
        undefined /* setApiDetails */;
        ;
        const v2405 = stdlib.addressEq(v2114, v1724);
        stdlib.assert(v2405, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:273:23:application call to [unknown function] (defined at: ./index.rsh:273:23:function exp)'],
          msg: 'ERROR: Setting game name is only allowed by the game master',
          who: 'Deployer'
          });
        const v2407 = null;
        await txn3.getOutput('GameMaster_resetBoard', 'v2407', ctc0, v2407);
        const cv1800 = v1798;
        const cv1801 = v1801;
        const cv1802 = true;
        const cv1803 = v1803;
        const cv1804 = v2116;
        
        v1800 = cv1800;
        v1801 = cv1801;
        v1802 = cv1802;
        v1803 = cv1803;
        v1804 = cv1804;
        
        continue;
        break;
        }
      case 'GameMaster_updateGameRules0_418': {
        const v2570 = v2115[1];
        undefined /* setApiDetails */;
        ;
        const v2679 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '0')];
        const v2680 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '1')];
        const v2681 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '2')];
        const v2682 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '3')];
        const v2683 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '4')];
        const v2685 = stdlib.addressEq(v2114, v1724);
        stdlib.assert(v2685, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:282:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
          msg: 'ERROR: Setting game name is only allowed by the game master',
          who: 'Deployer'
          });
        const v2694 = stdlib.digest([ctc6], [v2679]);
        const v2697 = stdlib.digestEq(v2694, v1755);
        const v2698 = v2697 ? false : true;
        stdlib.assert(v2698, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:32:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
          msg: 'ERROR: Game name cannot be empty',
          who: 'Deployer'
          });
        const v2700 = stdlib.lt(v2680, v2681);
        stdlib.assert(v2700, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:33:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
          msg: 'ERROR: The end round cannot be earlier than the start round',
          who: 'Deployer'
          });
        const v2702 = stdlib.gt(v2681, v2680);
        stdlib.assert(v2702, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:34:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
          msg: 'ERROR: The start round cannot be later than the end round',
          who: 'Deployer'
          });
        const v2704 = stdlib.ge(v2682, stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2704, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
          msg: 'ERROR: Cool-down period cannot be negative',
          who: 'Deployer'
          });
        const v2711 = null;
        await txn3.getOutput('GameMaster_updateGameRules', 'v2711', ctc0, v2711);
        const v2725 = {
          colors: v2683,
          coolDown: v2682,
          endRound: v2681,
          gameName: v2679,
          startRound: v2680
          };
        const cv1800 = v1800;
        const cv1801 = v2725;
        const cv1802 = true;
        const cv1803 = v1803;
        const cv1804 = v2116;
        
        v1800 = cv1800;
        v1801 = cv1801;
        v1802 = cv1802;
        v1803 = cv1803;
        v1804 = cv1804;
        
        continue;
        break;
        }
      case 'Player_exitGame0_418': {
        const v2796 = v2115[1];
        undefined /* setApiDetails */;
        ;
        const v2955 = stdlib.gt(v1803, stdlib.checkedBigNumberify('./index.rsh:237:28:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2955, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:237:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
          msg: 'ERROR: Cannot have a negative number of players',
          who: 'Deployer'
          });
        const v2957 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2114), null);
        const v2958 = {
          None: 0,
          Some: 1
          }[v2957[0]];
        const v2959 = stdlib.eq(v2958, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2959, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:238:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
          msg: 'ERROR: A Player cannot exit a game they never joined',
          who: 'Deployer'
          });
        await stdlib.mapSet(map0, v2114, undefined /* Nothing */);
        const v2961 = null;
        await txn3.getOutput('Player_exitGame', 'v2961', ctc0, v2961);
        const v2967 = stdlib.safeSub(v1803, stdlib.checkedBigNumberify('./index.rsh:246:28:decimal', stdlib.UInt_max, '1'));
        const cv1800 = v1800;
        const cv1801 = v1801;
        const cv1802 = true;
        const cv1803 = v2967;
        const cv1804 = v2116;
        
        v1800 = cv1800;
        v1801 = cv1801;
        v1802 = cv1802;
        v1803 = cv1803;
        v1804 = cv1804;
        
        continue;
        break;
        }
      case 'Player_joinGame0_418': {
        const v3022 = v2115[1];
        undefined /* setApiDetails */;
        ;
        const v3196 = stdlib.le(v1803, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v3196, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:188:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:23:application call to [unknown function] (defined at: ./index.rsh:192:23:function exp)'],
          msg: 'ERROR: Max players reached',
          who: 'Deployer'
          });
        const v3198 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2114), null);
        const v3199 = {
          None: 0,
          Some: 1
          }[v3198[0]];
        const v3200 = stdlib.eq(v3199, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3200, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:189:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:23:application call to [unknown function] (defined at: ./index.rsh:192:23:function exp)'],
          msg: 'ERROR: A Player cannot join a game more than once',
          who: 'Deployer'
          });
        const v3203 = {
          lastPlayed: v2116
          };
        await stdlib.mapSet(map0, v2114, v3203);
        const v3204 = v2116;
        await txn3.getOutput('Player_joinGame', 'v3204', ctc1, v3204);
        const v3210 = stdlib.safeAdd(v1803, stdlib.checkedBigNumberify('./index.rsh:197:28:decimal', stdlib.UInt_max, '1'));
        const cv1800 = v1800;
        const cv1801 = v1801;
        const cv1802 = true;
        const cv1803 = v3210;
        const cv1804 = v2116;
        
        v1800 = cv1800;
        v1801 = cv1801;
        v1802 = cv1802;
        v1803 = cv1803;
        v1804 = cv1804;
        
        continue;
        break;
        }
      case 'Player_setTile0_418': {
        const v3248 = v2115[1];
        undefined /* setApiDetails */;
        ;
        const v3439 = v3248[stdlib.checkedBigNumberify('./index.rsh:205:10:spread', stdlib.UInt_max, '0')];
        const v3440 = v3248[stdlib.checkedBigNumberify('./index.rsh:205:10:spread', stdlib.UInt_max, '1')];
        const v3441 = stdlib.lt(v3439, stdlib.checkedBigNumberify('./index.rsh:4:20:decimal', stdlib.UInt_max, '9'));
        stdlib.assert(v3441, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:207:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
          msg: 'ERROR: Invalid tile',
          who: 'Deployer'
          });
        const v3443 = stdlib.lt(v3440, stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, '3'));
        stdlib.assert(v3443, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:208:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
          msg: 'ERROR: Invalid tile color',
          who: 'Deployer'
          });
        const v3445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2114), null);
        const v3446 = {
          lastPlayed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')
          };
        const v3447 = stdlib.fromSome(v3445, v3446);
        const v3448 = v3447.lastPlayed;
        const v3449 = stdlib.gt(v3448, stdlib.checkedBigNumberify('./index.rsh:212:39:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v3449, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:212:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
          msg: 'ERROR: Player cannot set tile before joining game',
          who: 'Deployer'
          });
        const v3453 = v2116;
        const v3455 = stdlib.ge(v2116, v1972);
        stdlib.assert(v3455, {
          at: './index.rsh:218:20:application',
          fs: ['at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
          msg: 'ERROR: Player cannot play before the game starts',
          who: 'Deployer'
          });
        const v3457 = stdlib.le(v2116, v1973);
        stdlib.assert(v3457, {
          at: './index.rsh:219:20:application',
          fs: ['at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
          msg: 'ERROR: Player cannot play after the game ends',
          who: 'Deployer'
          });
        const v3459 = stdlib.safeAdd(v3448, v1974);
        const v3460 = stdlib.le(v3459, v2116);
        stdlib.assert(v3460, {
          at: './index.rsh:220:20:application',
          fs: ['at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
          msg: 'ERROR: Player must wait the cool-down period before placing a tile',
          who: 'Deployer'
          });
        const v3461 = ['Some', v2114];
        const v3462 = [v3440, v3461];
        const v3464 = stdlib.Array_set(v1800, v3439, v3462);
        const v3465 = {
          lastPlayed: v2116
          };
        await stdlib.mapSet(map0, v2114, v3465);
        await txn3.getOutput('Player_setTile', 'v3453', ctc1, v3453);
        const cv1800 = v3464;
        const cv1801 = v1801;
        const cv1802 = true;
        const cv1803 = v1803;
        const cv1804 = v2116;
        
        v1800 = cv1800;
        v1801 = cv1801;
        v1802 = cv1802;
        v1803 = cv1803;
        v1804 = cv1804;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _GameMaster_destroyGame4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _GameMaster_destroyGame4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _GameMaster_destroyGame4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Object({
    colors: ctc10,
    coolDown: ctc1,
    endRound: ctc1,
    gameName: ctc11,
    startRound: ctc1
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1, ctc1, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    GameMaster_destroyGame0_418: ctc13,
    GameMaster_resetBoard0_418: ctc13,
    GameMaster_updateGameRules0_418: ctc14,
    Player_exitGame0_418: ctc13,
    Player_joinGame0_418: ctc13,
    Player_setTile0_418: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1]);
  const v2030 = ctc.selfAddress();
  const v2032 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:258:10:application call to [unknown function] (defined at: ./index.rsh:258:10:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_destroyGame0_418" (defined at: ./index.rsh:257:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'in',
    who: 'GameMaster_destroyGame'
    });
  const v2034 = stdlib.addressEq(v2030, v1724);
  stdlib.assert(v2034, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:258:10:application call to [unknown function] (defined at: ./index.rsh:258:10:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_destroyGame0_418" (defined at: ./index.rsh:257:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Setting game name is only allowed by the game master',
    who: 'GameMaster_destroyGame'
    });
  const v2039 = ['GameMaster_destroyGame0_418', v2032];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974, v2039],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:257:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
      
      switch (v2115[0]) {
        case 'GameMaster_destroyGame0_418': {
          const v2118 = v2115[1];
          sim_r.txns.push({
            kind: 'api',
            who: "GameMaster_destroyGame"
            });
          ;
          const v2132 = null;
          const v2133 = await txn1.getOutput('GameMaster_destroyGame', 'v2132', ctc0, v2132);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'GameMaster_resetBoard0_418': {
          const v2344 = v2115[1];
          
          break;
          }
        case 'GameMaster_updateGameRules0_418': {
          const v2570 = v2115[1];
          
          break;
          }
        case 'Player_exitGame0_418': {
          const v2796 = v2115[1];
          
          break;
          }
        case 'Player_joinGame0_418': {
          const v3022 = v2115[1];
          
          break;
          }
        case 'Player_setTile0_418': {
          const v3248 = v2115[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
  switch (v2115[0]) {
    case 'GameMaster_destroyGame0_418': {
      const v2118 = v2115[1];
      undefined /* setApiDetails */;
      ;
      const v2130 = stdlib.addressEq(v2114, v1724);
      stdlib.assert(v2130, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:259:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
        msg: 'ERROR: Setting game name is only allowed by the game master',
        who: 'GameMaster_destroyGame'
        });
      const v2132 = null;
      const v2133 = await txn1.getOutput('GameMaster_destroyGame', 'v2132', ctc0, v2132);
      if (v1199) {
        stdlib.protect(ctc0, await interact.out(v2118, v2133), {
          at: './index.rsh:257:11:application',
          fs: ['at ./index.rsh:257:11:application call to [unknown function] (defined at: ./index.rsh:257:11:function exp)', 'at ./index.rsh:262:22:application call to "apiReturn" (defined at: ./index.rsh:261:23:function exp)', 'at ./index.rsh:261:23:application call to [unknown function] (defined at: ./index.rsh:261:23:function exp)'],
          msg: 'out',
          who: 'GameMaster_destroyGame'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'GameMaster_resetBoard0_418': {
      const v2344 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_updateGameRules0_418': {
      const v2570 = v2115[1];
      return;
      break;
      }
    case 'Player_exitGame0_418': {
      const v2796 = v2115[1];
      return;
      break;
      }
    case 'Player_joinGame0_418': {
      const v3022 = v2115[1];
      return;
      break;
      }
    case 'Player_setTile0_418': {
      const v3248 = v2115[1];
      return;
      break;
      }
    }
  
  
  };
export async function _GameMaster_resetBoard4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _GameMaster_resetBoard4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _GameMaster_resetBoard4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Object({
    colors: ctc10,
    coolDown: ctc1,
    endRound: ctc1,
    gameName: ctc11,
    startRound: ctc1
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1, ctc1, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    GameMaster_destroyGame0_418: ctc13,
    GameMaster_resetBoard0_418: ctc13,
    GameMaster_updateGameRules0_418: ctc14,
    Player_exitGame0_418: ctc13,
    Player_joinGame0_418: ctc13,
    Player_setTile0_418: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1]);
  const v2041 = ctc.selfAddress();
  const v2043 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:269:10:application call to [unknown function] (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_resetBoard0_418" (defined at: ./index.rsh:268:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'in',
    who: 'GameMaster_resetBoard'
    });
  const v2045 = stdlib.addressEq(v2041, v1724);
  stdlib.assert(v2045, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:269:10:application call to [unknown function] (defined at: ./index.rsh:269:10:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_resetBoard0_418" (defined at: ./index.rsh:268:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Setting game name is only allowed by the game master',
    who: 'GameMaster_resetBoard'
    });
  const v2050 = ['GameMaster_resetBoard0_418', v2043];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974, v2050],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:268:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
      
      switch (v2115[0]) {
        case 'GameMaster_destroyGame0_418': {
          const v2118 = v2115[1];
          
          break;
          }
        case 'GameMaster_resetBoard0_418': {
          const v2344 = v2115[1];
          sim_r.txns.push({
            kind: 'api',
            who: "GameMaster_resetBoard"
            });
          ;
          const v2407 = null;
          const v2408 = await txn1.getOutput('GameMaster_resetBoard', 'v2407', ctc0, v2407);
          
          const v5184 = v1798;
          const v5185 = v1801;
          const v5187 = v1803;
          const v5189 = v1801.gameName;
          const v5190 = v1801.colors;
          const v5191 = v1801.startRound;
          const v5192 = v1801.endRound;
          const v5193 = v1801.coolDown;
          sim_r.isHalt = false;
          
          break;
          }
        case 'GameMaster_updateGameRules0_418': {
          const v2570 = v2115[1];
          
          break;
          }
        case 'Player_exitGame0_418': {
          const v2796 = v2115[1];
          
          break;
          }
        case 'Player_joinGame0_418': {
          const v3022 = v2115[1];
          
          break;
          }
        case 'Player_setTile0_418': {
          const v3248 = v2115[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
  switch (v2115[0]) {
    case 'GameMaster_destroyGame0_418': {
      const v2118 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_resetBoard0_418': {
      const v2344 = v2115[1];
      undefined /* setApiDetails */;
      ;
      const v2405 = stdlib.addressEq(v2114, v1724);
      stdlib.assert(v2405, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:270:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:273:23:application call to [unknown function] (defined at: ./index.rsh:273:23:function exp)'],
        msg: 'ERROR: Setting game name is only allowed by the game master',
        who: 'GameMaster_resetBoard'
        });
      const v2407 = null;
      const v2408 = await txn1.getOutput('GameMaster_resetBoard', 'v2407', ctc0, v2407);
      if (v1199) {
        stdlib.protect(ctc0, await interact.out(v2344, v2408), {
          at: './index.rsh:268:11:application',
          fs: ['at ./index.rsh:268:11:application call to [unknown function] (defined at: ./index.rsh:268:11:function exp)', 'at ./index.rsh:274:22:application call to "apiReturn" (defined at: ./index.rsh:273:23:function exp)', 'at ./index.rsh:273:23:application call to [unknown function] (defined at: ./index.rsh:273:23:function exp)'],
          msg: 'out',
          who: 'GameMaster_resetBoard'
          });
        }
      else {
        }
      
      const v5184 = v1798;
      const v5185 = v1801;
      const v5187 = v1803;
      const v5189 = v1801.gameName;
      const v5190 = v1801.colors;
      const v5191 = v1801.startRound;
      const v5192 = v1801.endRound;
      const v5193 = v1801.coolDown;
      return;
      
      break;
      }
    case 'GameMaster_updateGameRules0_418': {
      const v2570 = v2115[1];
      return;
      break;
      }
    case 'Player_exitGame0_418': {
      const v2796 = v2115[1];
      return;
      break;
      }
    case 'Player_joinGame0_418': {
      const v3022 = v2115[1];
      return;
      break;
      }
    case 'Player_setTile0_418': {
      const v3248 = v2115[1];
      return;
      break;
      }
    }
  
  
  };
export async function _GameMaster_updateGameRules4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _GameMaster_updateGameRules4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _GameMaster_updateGameRules4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Object({
    colors: ctc10,
    coolDown: ctc1,
    endRound: ctc1,
    gameName: ctc11,
    startRound: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc11, ctc1, ctc1, ctc1, ctc10]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    GameMaster_destroyGame0_418: ctc14,
    GameMaster_resetBoard0_418: ctc14,
    GameMaster_updateGameRules0_418: ctc13,
    Player_exitGame0_418: ctc14,
    Player_joinGame0_418: ctc14,
    Player_setTile0_418: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1]);
  const v2052 = ctc.selfAddress();
  const v2054 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:281:73:application call to [unknown function] (defined at: ./index.rsh:281:73:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_updateGameRules0_418" (defined at: ./index.rsh:280:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'in',
    who: 'GameMaster_updateGameRules'
    });
  const v2055 = v2054[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2056 = v2054[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2057 = v2054[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2058 = v2054[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '3')];
  const v2069 = stdlib.addressEq(v2052, v1724);
  stdlib.assert(v2069, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:282:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:281:73:application call to [unknown function] (defined at: ./index.rsh:281:73:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_updateGameRules0_418" (defined at: ./index.rsh:280:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Setting game name is only allowed by the game master',
    who: 'GameMaster_updateGameRules'
    });
  const v2078 = stdlib.digest([ctc11], [v2055]);
  const v2081 = stdlib.digestEq(v2078, v1755);
  const v2082 = v2081 ? false : true;
  stdlib.assert(v2082, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:32:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:281:73:application call to [unknown function] (defined at: ./index.rsh:281:73:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_updateGameRules0_418" (defined at: ./index.rsh:280:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Game name cannot be empty',
    who: 'GameMaster_updateGameRules'
    });
  const v2084 = stdlib.lt(v2056, v2057);
  stdlib.assert(v2084, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:33:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:281:73:application call to [unknown function] (defined at: ./index.rsh:281:73:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_updateGameRules0_418" (defined at: ./index.rsh:280:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: The end round cannot be earlier than the start round',
    who: 'GameMaster_updateGameRules'
    });
  const v2086 = stdlib.gt(v2057, v2056);
  stdlib.assert(v2086, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:34:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:281:73:application call to [unknown function] (defined at: ./index.rsh:281:73:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_updateGameRules0_418" (defined at: ./index.rsh:280:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: The start round cannot be later than the end round',
    who: 'GameMaster_updateGameRules'
    });
  const v2088 = stdlib.ge(v2058, stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2088, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:281:73:application call to [unknown function] (defined at: ./index.rsh:281:73:function exp)', 'at ./index.rsh:175:72:application call to "runGameMaster_updateGameRules0_418" (defined at: ./index.rsh:280:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Cool-down period cannot be negative',
    who: 'GameMaster_updateGameRules'
    });
  const v2106 = ['GameMaster_updateGameRules0_418', v2054];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974, v2106],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:280:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
      
      switch (v2115[0]) {
        case 'GameMaster_destroyGame0_418': {
          const v2118 = v2115[1];
          
          break;
          }
        case 'GameMaster_resetBoard0_418': {
          const v2344 = v2115[1];
          
          break;
          }
        case 'GameMaster_updateGameRules0_418': {
          const v2570 = v2115[1];
          sim_r.txns.push({
            kind: 'api',
            who: "GameMaster_updateGameRules"
            });
          ;
          const v2679 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '0')];
          const v2680 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '1')];
          const v2681 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '2')];
          const v2682 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '3')];
          const v2683 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '4')];
          const v2711 = null;
          const v2712 = await txn1.getOutput('GameMaster_updateGameRules', 'v2711', ctc0, v2711);
          
          const v2725 = {
            colors: v2683,
            coolDown: v2682,
            endRound: v2681,
            gameName: v2679,
            startRound: v2680
            };
          const v5289 = v1800;
          const v5290 = v2725;
          const v5292 = v1803;
          const v5294 = v2725.gameName;
          const v5295 = v2725.colors;
          const v5296 = v2725.startRound;
          const v5297 = v2725.endRound;
          const v5298 = v2725.coolDown;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Player_exitGame0_418': {
          const v2796 = v2115[1];
          
          break;
          }
        case 'Player_joinGame0_418': {
          const v3022 = v2115[1];
          
          break;
          }
        case 'Player_setTile0_418': {
          const v3248 = v2115[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
  switch (v2115[0]) {
    case 'GameMaster_destroyGame0_418': {
      const v2118 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_resetBoard0_418': {
      const v2344 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_updateGameRules0_418': {
      const v2570 = v2115[1];
      undefined /* setApiDetails */;
      ;
      const v2679 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '0')];
      const v2680 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '1')];
      const v2681 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '2')];
      const v2682 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '3')];
      const v2683 = v2570[stdlib.checkedBigNumberify('./index.rsh:280:10:spread', stdlib.UInt_max, '4')];
      const v2685 = stdlib.addressEq(v2114, v1724);
      stdlib.assert(v2685, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:38:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:282:21:application call to "isGameMaster" (defined at: ./index.rsh:37:49:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'ERROR: Setting game name is only allowed by the game master',
        who: 'GameMaster_updateGameRules'
        });
      const v2694 = stdlib.digest([ctc11], [v2679]);
      const v2697 = stdlib.digestEq(v2694, v1755);
      const v2698 = v2697 ? false : true;
      stdlib.assert(v2698, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:32:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'ERROR: Game name cannot be empty',
        who: 'GameMaster_updateGameRules'
        });
      const v2700 = stdlib.lt(v2680, v2681);
      stdlib.assert(v2700, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:33:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'ERROR: The end round cannot be earlier than the start round',
        who: 'GameMaster_updateGameRules'
        });
      const v2702 = stdlib.gt(v2681, v2680);
      stdlib.assert(v2702, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:34:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'ERROR: The start round cannot be later than the end round',
        who: 'GameMaster_updateGameRules'
        });
      const v2704 = stdlib.ge(v2682, stdlib.checkedBigNumberify('./index.rsh:35:27:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2704, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:35:8:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:291:23:application call to "checkGameRules" (defined at: ./index.rsh:31:32:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
        msg: 'ERROR: Cool-down period cannot be negative',
        who: 'GameMaster_updateGameRules'
        });
      const v2711 = null;
      const v2712 = await txn1.getOutput('GameMaster_updateGameRules', 'v2711', ctc0, v2711);
      if (v1199) {
        stdlib.protect(ctc0, await interact.out(v2570, v2712), {
          at: './index.rsh:280:11:application',
          fs: ['at ./index.rsh:280:11:application call to [unknown function] (defined at: ./index.rsh:280:11:function exp)', 'at ./index.rsh:295:22:application call to "apiReturn" (defined at: ./index.rsh:294:23:function exp)', 'at ./index.rsh:294:23:application call to [unknown function] (defined at: ./index.rsh:294:23:function exp)'],
          msg: 'out',
          who: 'GameMaster_updateGameRules'
          });
        }
      else {
        }
      
      const v2725 = {
        colors: v2683,
        coolDown: v2682,
        endRound: v2681,
        gameName: v2679,
        startRound: v2680
        };
      const v5289 = v1800;
      const v5290 = v2725;
      const v5292 = v1803;
      const v5294 = v2725.gameName;
      const v5295 = v2725.colors;
      const v5296 = v2725.startRound;
      const v5297 = v2725.endRound;
      const v5298 = v2725.coolDown;
      return;
      
      break;
      }
    case 'Player_exitGame0_418': {
      const v2796 = v2115[1];
      return;
      break;
      }
    case 'Player_joinGame0_418': {
      const v3022 = v2115[1];
      return;
      break;
      }
    case 'Player_setTile0_418': {
      const v3248 = v2115[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_exitGame4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_exitGame4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_exitGame4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Object({
    colors: ctc10,
    coolDown: ctc1,
    endRound: ctc1,
    gameName: ctc11,
    startRound: ctc1
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1, ctc1, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    GameMaster_destroyGame0_418: ctc13,
    GameMaster_resetBoard0_418: ctc13,
    GameMaster_updateGameRules0_418: ctc14,
    Player_exitGame0_418: ctc13,
    Player_joinGame0_418: ctc13,
    Player_setTile0_418: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1]);
  const v2016 = ctc.selfAddress();
  const v2018 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:236:10:application call to [unknown function] (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_exitGame0_418" (defined at: ./index.rsh:235:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'in',
    who: 'Player_exitGame'
    });
  const v2019 = stdlib.gt(v1803, stdlib.checkedBigNumberify('./index.rsh:237:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2019, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:237:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:10:application call to [unknown function] (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_exitGame0_418" (defined at: ./index.rsh:235:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Cannot have a negative number of players',
    who: 'Player_exitGame'
    });
  const v2021 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2016), null);
  const v2022 = {
    None: 0,
    Some: 1
    }[v2021[0]];
  const v2023 = stdlib.eq(v2022, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2023, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:238:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:236:10:application call to [unknown function] (defined at: ./index.rsh:236:10:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_exitGame0_418" (defined at: ./index.rsh:235:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: A Player cannot exit a game they never joined',
    who: 'Player_exitGame'
    });
  const v2028 = ['Player_exitGame0_418', v2018];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974, v2028],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:235:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
      
      switch (v2115[0]) {
        case 'GameMaster_destroyGame0_418': {
          const v2118 = v2115[1];
          
          break;
          }
        case 'GameMaster_resetBoard0_418': {
          const v2344 = v2115[1];
          
          break;
          }
        case 'GameMaster_updateGameRules0_418': {
          const v2570 = v2115[1];
          
          break;
          }
        case 'Player_exitGame0_418': {
          const v2796 = v2115[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_exitGame"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2114), null);
          await stdlib.simMapSet(sim_r, 0, v2114, undefined /* Nothing */);
          const v2961 = null;
          const v2962 = await txn1.getOutput('Player_exitGame', 'v2961', ctc0, v2961);
          
          const v2967 = stdlib.safeSub(v1803, stdlib.checkedBigNumberify('./index.rsh:246:28:decimal', stdlib.UInt_max, '1'));
          const v5394 = v1800;
          const v5395 = v1801;
          const v5397 = v2967;
          const v5399 = v1801.gameName;
          const v5400 = v1801.colors;
          const v5401 = v1801.startRound;
          const v5402 = v1801.endRound;
          const v5403 = v1801.coolDown;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Player_joinGame0_418': {
          const v3022 = v2115[1];
          
          break;
          }
        case 'Player_setTile0_418': {
          const v3248 = v2115[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
  switch (v2115[0]) {
    case 'GameMaster_destroyGame0_418': {
      const v2118 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_resetBoard0_418': {
      const v2344 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_updateGameRules0_418': {
      const v2570 = v2115[1];
      return;
      break;
      }
    case 'Player_exitGame0_418': {
      const v2796 = v2115[1];
      undefined /* setApiDetails */;
      ;
      const v2955 = stdlib.gt(v1803, stdlib.checkedBigNumberify('./index.rsh:237:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2955, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:237:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
        msg: 'ERROR: Cannot have a negative number of players',
        who: 'Player_exitGame'
        });
      const v2957 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2114), null);
      const v2958 = {
        None: 0,
        Some: 1
        }[v2957[0]];
      const v2959 = stdlib.eq(v2958, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2959, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:238:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
        msg: 'ERROR: A Player cannot exit a game they never joined',
        who: 'Player_exitGame'
        });
      await stdlib.mapSet(map0, v2114, undefined /* Nothing */);
      const v2961 = null;
      const v2962 = await txn1.getOutput('Player_exitGame', 'v2961', ctc0, v2961);
      if (v1199) {
        stdlib.protect(ctc0, await interact.out(v2796, v2962), {
          at: './index.rsh:235:11:application',
          fs: ['at ./index.rsh:235:11:application call to [unknown function] (defined at: ./index.rsh:235:11:function exp)', 'at ./index.rsh:243:22:application call to "apiReturn" (defined at: ./index.rsh:241:23:function exp)', 'at ./index.rsh:241:23:application call to [unknown function] (defined at: ./index.rsh:241:23:function exp)'],
          msg: 'out',
          who: 'Player_exitGame'
          });
        }
      else {
        }
      
      const v2967 = stdlib.safeSub(v1803, stdlib.checkedBigNumberify('./index.rsh:246:28:decimal', stdlib.UInt_max, '1'));
      const v5394 = v1800;
      const v5395 = v1801;
      const v5397 = v2967;
      const v5399 = v1801.gameName;
      const v5400 = v1801.colors;
      const v5401 = v1801.startRound;
      const v5402 = v1801.endRound;
      const v5403 = v1801.coolDown;
      return;
      
      break;
      }
    case 'Player_joinGame0_418': {
      const v3022 = v2115[1];
      return;
      break;
      }
    case 'Player_setTile0_418': {
      const v3248 = v2115[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_joinGame4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_joinGame4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_joinGame4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Object({
    colors: ctc10,
    coolDown: ctc1,
    endRound: ctc1,
    gameName: ctc11,
    startRound: ctc1
    });
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc11, ctc1, ctc1, ctc1, ctc10]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc16 = stdlib.T_Data({
    GameMaster_destroyGame0_418: ctc13,
    GameMaster_resetBoard0_418: ctc13,
    GameMaster_updateGameRules0_418: ctc14,
    Player_exitGame0_418: ctc13,
    Player_joinGame0_418: ctc13,
    Player_setTile0_418: ctc15
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1]);
  const v1976 = ctc.selfAddress();
  const v1978 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:187:10:application call to [unknown function] (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_joinGame0_418" (defined at: ./index.rsh:186:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'in',
    who: 'Player_joinGame'
    });
  const v1979 = stdlib.le(v1803, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v1979, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:188:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:10:application call to [unknown function] (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_joinGame0_418" (defined at: ./index.rsh:186:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Max players reached',
    who: 'Player_joinGame'
    });
  const v1981 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1976), null);
  const v1982 = {
    None: 0,
    Some: 1
    }[v1981[0]];
  const v1983 = stdlib.eq(v1982, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v1983, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:189:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:187:10:application call to [unknown function] (defined at: ./index.rsh:187:10:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_joinGame0_418" (defined at: ./index.rsh:186:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: A Player cannot join a game more than once',
    who: 'Player_joinGame'
    });
  const v1988 = ['Player_joinGame0_418', v1978];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974, v1988],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:186:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
      
      switch (v2115[0]) {
        case 'GameMaster_destroyGame0_418': {
          const v2118 = v2115[1];
          
          break;
          }
        case 'GameMaster_resetBoard0_418': {
          const v2344 = v2115[1];
          
          break;
          }
        case 'GameMaster_updateGameRules0_418': {
          const v2570 = v2115[1];
          
          break;
          }
        case 'Player_exitGame0_418': {
          const v2796 = v2115[1];
          
          break;
          }
        case 'Player_joinGame0_418': {
          const v3022 = v2115[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_joinGame"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2114), null);
          const v3203 = {
            lastPlayed: v2116
            };
          await stdlib.simMapSet(sim_r, 0, v2114, v3203);
          const v3204 = v2116;
          const v3205 = await txn1.getOutput('Player_joinGame', 'v3204', ctc1, v3204);
          
          const v3210 = stdlib.safeAdd(v1803, stdlib.checkedBigNumberify('./index.rsh:197:28:decimal', stdlib.UInt_max, '1'));
          const v5499 = v1800;
          const v5500 = v1801;
          const v5502 = v3210;
          const v5504 = v1801.gameName;
          const v5505 = v1801.colors;
          const v5506 = v1801.startRound;
          const v5507 = v1801.endRound;
          const v5508 = v1801.coolDown;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Player_setTile0_418': {
          const v3248 = v2115[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
  switch (v2115[0]) {
    case 'GameMaster_destroyGame0_418': {
      const v2118 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_resetBoard0_418': {
      const v2344 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_updateGameRules0_418': {
      const v2570 = v2115[1];
      return;
      break;
      }
    case 'Player_exitGame0_418': {
      const v2796 = v2115[1];
      return;
      break;
      }
    case 'Player_joinGame0_418': {
      const v3022 = v2115[1];
      undefined /* setApiDetails */;
      ;
      const v3196 = stdlib.le(v1803, stdlib.checkedBigNumberify('./index.rsh:8:21:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v3196, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:188:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:23:application call to [unknown function] (defined at: ./index.rsh:192:23:function exp)'],
        msg: 'ERROR: Max players reached',
        who: 'Player_joinGame'
        });
      const v3198 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2114), null);
      const v3199 = {
        None: 0,
        Some: 1
        }[v3198[0]];
      const v3200 = stdlib.eq(v3199, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3200, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:189:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:192:23:application call to [unknown function] (defined at: ./index.rsh:192:23:function exp)'],
        msg: 'ERROR: A Player cannot join a game more than once',
        who: 'Player_joinGame'
        });
      const v3203 = {
        lastPlayed: v2116
        };
      await stdlib.mapSet(map0, v2114, v3203);
      const v3204 = v2116;
      const v3205 = await txn1.getOutput('Player_joinGame', 'v3204', ctc1, v3204);
      if (v1199) {
        stdlib.protect(ctc0, await interact.out(v3022, v3205), {
          at: './index.rsh:186:11:application',
          fs: ['at ./index.rsh:186:11:application call to [unknown function] (defined at: ./index.rsh:186:11:function exp)', 'at ./index.rsh:194:22:application call to "apiReturn" (defined at: ./index.rsh:192:23:function exp)', 'at ./index.rsh:192:23:application call to [unknown function] (defined at: ./index.rsh:192:23:function exp)'],
          msg: 'out',
          who: 'Player_joinGame'
          });
        }
      else {
        }
      
      const v3210 = stdlib.safeAdd(v1803, stdlib.checkedBigNumberify('./index.rsh:197:28:decimal', stdlib.UInt_max, '1'));
      const v5499 = v1800;
      const v5500 = v1801;
      const v5502 = v3210;
      const v5504 = v1801.gameName;
      const v5505 = v1801.colors;
      const v5506 = v1801.startRound;
      const v5507 = v1801.endRound;
      const v5508 = v1801.coolDown;
      return;
      
      break;
      }
    case 'Player_setTile0_418': {
      const v3248 = v2115[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Player_setTile4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Player_setTile4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Player_setTile4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    lastPlayed: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc4
    });
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'));
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc12 = stdlib.T_Object({
    colors: ctc10,
    coolDown: ctc1,
    endRound: ctc1,
    gameName: ctc11,
    startRound: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([]);
  const ctc15 = stdlib.T_Tuple([ctc11, ctc1, ctc1, ctc1, ctc10]);
  const ctc16 = stdlib.T_Data({
    GameMaster_destroyGame0_418: ctc14,
    GameMaster_resetBoard0_418: ctc14,
    GameMaster_updateGameRules0_418: ctc15,
    Player_exitGame0_418: ctc14,
    Player_joinGame0_418: ctc14,
    Player_setTile0_418: ctc13
    });
  
  const map0_ctc = ctc3;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1]);
  const v1990 = ctc.selfAddress();
  const v1992 = stdlib.protect(ctc13, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:206:27:application call to [unknown function] (defined at: ./index.rsh:206:27:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_setTile0_418" (defined at: ./index.rsh:205:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'in',
    who: 'Player_setTile'
    });
  const v1993 = v1992[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1994 = v1992[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1997 = stdlib.lt(v1993, stdlib.checkedBigNumberify('./index.rsh:4:20:decimal', stdlib.UInt_max, '9'));
  stdlib.assert(v1997, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:207:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:27:application call to [unknown function] (defined at: ./index.rsh:206:27:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_setTile0_418" (defined at: ./index.rsh:205:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Invalid tile',
    who: 'Player_setTile'
    });
  const v1999 = stdlib.lt(v1994, stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, '3'));
  stdlib.assert(v1999, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:208:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:27:application call to [unknown function] (defined at: ./index.rsh:206:27:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_setTile0_418" (defined at: ./index.rsh:205:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Invalid tile color',
    who: 'Player_setTile'
    });
  const v2001 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1990), null);
  const v2002 = {
    lastPlayed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')
    };
  const v2003 = stdlib.fromSome(v2001, v2002);
  const v2004 = v2003.lastPlayed;
  const v2005 = stdlib.gt(v2004, stdlib.checkedBigNumberify('./index.rsh:212:39:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v2005, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:212:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:206:27:application call to [unknown function] (defined at: ./index.rsh:206:27:function exp)', 'at ./index.rsh:175:72:application call to "runPlayer_setTile0_418" (defined at: ./index.rsh:205:10:function exp)', 'at ./index.rsh:175:72:application call to [unknown function] (defined at: ./index.rsh:175:72:function exp)'],
    msg: 'ERROR: Player cannot set tile before joining game',
    who: 'Player_setTile'
    });
  const v2014 = ['Player_setTile0_418', v1992];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1724, v1755, v1798, v1800, v1801, v1803, v1967, v1968, v1972, v1973, v1974, v2014],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./index.rsh:205:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
      
      switch (v2115[0]) {
        case 'GameMaster_destroyGame0_418': {
          const v2118 = v2115[1];
          
          break;
          }
        case 'GameMaster_resetBoard0_418': {
          const v2344 = v2115[1];
          
          break;
          }
        case 'GameMaster_updateGameRules0_418': {
          const v2570 = v2115[1];
          
          break;
          }
        case 'Player_exitGame0_418': {
          const v2796 = v2115[1];
          
          break;
          }
        case 'Player_joinGame0_418': {
          const v3022 = v2115[1];
          
          break;
          }
        case 'Player_setTile0_418': {
          const v3248 = v2115[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Player_setTile"
            });
          ;
          const v3439 = v3248[stdlib.checkedBigNumberify('./index.rsh:205:10:spread', stdlib.UInt_max, '0')];
          const v3440 = v3248[stdlib.checkedBigNumberify('./index.rsh:205:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2114), null);
          const v3453 = v2116;
          const v3461 = ['Some', v2114];
          const v3462 = [v3440, v3461];
          const v3464 = stdlib.Array_set(v1800, v3439, v3462);
          const v3465 = {
            lastPlayed: v2116
            };
          await stdlib.simMapSet(sim_r, 0, v2114, v3465);
          const v3466 = await txn1.getOutput('Player_setTile', 'v3453', ctc1, v3453);
          
          const v5604 = v3464;
          const v5605 = v1801;
          const v5607 = v1803;
          const v5609 = v1801.gameName;
          const v5610 = v1801.colors;
          const v5611 = v1801.startRound;
          const v5612 = v1801.endRound;
          const v5613 = v1801.coolDown;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc8, ctc8, ctc12, ctc1, ctc11, ctc10, ctc1, ctc1, ctc1, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v2115], secs: v2117, time: v2116, didSend: v1199, from: v2114 } = txn1;
  switch (v2115[0]) {
    case 'GameMaster_destroyGame0_418': {
      const v2118 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_resetBoard0_418': {
      const v2344 = v2115[1];
      return;
      break;
      }
    case 'GameMaster_updateGameRules0_418': {
      const v2570 = v2115[1];
      return;
      break;
      }
    case 'Player_exitGame0_418': {
      const v2796 = v2115[1];
      return;
      break;
      }
    case 'Player_joinGame0_418': {
      const v3022 = v2115[1];
      return;
      break;
      }
    case 'Player_setTile0_418': {
      const v3248 = v2115[1];
      undefined /* setApiDetails */;
      ;
      const v3439 = v3248[stdlib.checkedBigNumberify('./index.rsh:205:10:spread', stdlib.UInt_max, '0')];
      const v3440 = v3248[stdlib.checkedBigNumberify('./index.rsh:205:10:spread', stdlib.UInt_max, '1')];
      const v3441 = stdlib.lt(v3439, stdlib.checkedBigNumberify('./index.rsh:4:20:decimal', stdlib.UInt_max, '9'));
      stdlib.assert(v3441, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:207:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
        msg: 'ERROR: Invalid tile',
        who: 'Player_setTile'
        });
      const v3443 = stdlib.lt(v3440, stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, '3'));
      stdlib.assert(v3443, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:208:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
        msg: 'ERROR: Invalid tile color',
        who: 'Player_setTile'
        });
      const v3445 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2114), null);
      const v3446 = {
        lastPlayed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')
        };
      const v3447 = stdlib.fromSome(v3445, v3446);
      const v3448 = v3447.lastPlayed;
      const v3449 = stdlib.gt(v3448, stdlib.checkedBigNumberify('./index.rsh:212:39:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v3449, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:212:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
        msg: 'ERROR: Player cannot set tile before joining game',
        who: 'Player_setTile'
        });
      const v3453 = v2116;
      const v3455 = stdlib.ge(v2116, v1972);
      stdlib.assert(v3455, {
        at: './index.rsh:218:20:application',
        fs: ['at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
        msg: 'ERROR: Player cannot play before the game starts',
        who: 'Player_setTile'
        });
      const v3457 = stdlib.le(v2116, v1973);
      stdlib.assert(v3457, {
        at: './index.rsh:219:20:application',
        fs: ['at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
        msg: 'ERROR: Player cannot play after the game ends',
        who: 'Player_setTile'
        });
      const v3459 = stdlib.safeAdd(v3448, v1974);
      const v3460 = stdlib.le(v3459, v2116);
      stdlib.assert(v3460, {
        at: './index.rsh:220:20:application',
        fs: ['at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
        msg: 'ERROR: Player must wait the cool-down period before placing a tile',
        who: 'Player_setTile'
        });
      const v3461 = ['Some', v2114];
      const v3462 = [v3440, v3461];
      const v3464 = stdlib.Array_set(v1800, v3439, v3462);
      const v3465 = {
        lastPlayed: v2116
        };
      await stdlib.mapSet(map0, v2114, v3465);
      const v3466 = await txn1.getOutput('Player_setTile', 'v3453', ctc1, v3453);
      if (v1199) {
        stdlib.protect(ctc0, await interact.out(v3248, v3466), {
          at: './index.rsh:205:11:application',
          fs: ['at ./index.rsh:205:11:application call to [unknown function] (defined at: ./index.rsh:205:11:function exp)', 'at ./index.rsh:229:22:application call to "apiReturn" (defined at: ./index.rsh:215:23:function exp)', 'at ./index.rsh:215:23:application call to [unknown function] (defined at: ./index.rsh:215:23:function exp)'],
          msg: 'out',
          who: 'Player_setTile'
          });
        }
      else {
        }
      
      const v5604 = v3464;
      const v5605 = v1801;
      const v5607 = v1803;
      const v5609 = v1801.gameName;
      const v5610 = v1801.colors;
      const v5611 = v1801.startRound;
      const v5612 = v1801.endRound;
      const v5613 = v1801.coolDown;
      return;
      
      break;
      }
    }
  
  
  };
export async function GameMaster_destroyGame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for GameMaster_destroyGame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for GameMaster_destroyGame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _GameMaster_destroyGame4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function GameMaster_resetBoard(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for GameMaster_resetBoard expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for GameMaster_resetBoard expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _GameMaster_resetBoard4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function GameMaster_updateGameRules(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for GameMaster_updateGameRules expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for GameMaster_updateGameRules expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _GameMaster_updateGameRules4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_exitGame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_exitGame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_exitGame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_exitGame4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_joinGame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_joinGame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_joinGame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_joinGame4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Player_setTile(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player_setTile expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player_setTile expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Player_setTile4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`GameMaster_destroyGame()byte[0]`, `GameMaster_resetBoard()byte[0]`, `GameMaster_updateGameRules(byte[128],uint64,uint64,uint64,byte[7][3])byte[0]`, `Player_exitGame()byte[0]`, `Player_joinGame()uint64`, `Player_setTile(uint64,uint64)uint64`],
    pure: [`GameState_board()(uint64,(byte,byte[32]))[9]`, `GameState_boardLength()uint64`, `GameState_boardWidth()uint64`, `GameState_colors()byte[7][3]`, `GameState_coolDown()uint64`, `GameState_endRound()uint64`, `GameState_gameMaster()address`, `GameState_gameName()byte[128]`, `GameState_maxPlayers()uint64`, `GameState_numPlayers()uint64`, `GameState_numTiles()uint64`, `GameState_startRound()uint64`, `appInfo()byte[33]`, `getPlayerTimestamp(address)uint64`],
    sigs: [`GameMaster_destroyGame()byte[0]`, `GameMaster_resetBoard()byte[0]`, `GameMaster_updateGameRules(byte[128],uint64,uint64,uint64,byte[7][3])byte[0]`, `GameState_board()(uint64,(byte,byte[32]))[9]`, `GameState_boardLength()uint64`, `GameState_boardWidth()uint64`, `GameState_colors()byte[7][3]`, `GameState_coolDown()uint64`, `GameState_endRound()uint64`, `GameState_gameMaster()address`, `GameState_gameName()byte[128]`, `GameState_maxPlayers()uint64`, `GameState_numPlayers()uint64`, `GameState_numTiles()uint64`, `GameState_startRound()uint64`, `Player_exitGame()byte[0]`, `Player_joinGame()uint64`, `Player_setTile(uint64,uint64)uint64`, `appInfo()byte[33]`, `getPlayerTimestamp(address)uint64`]
    },
  appApproval: `BiAnAQQACH+tAQnxAikDgAEF95+6uQew6PGJDMPZ570Om9yqkQ/phPejD+wI0/LSjwzPB/Kr/vsHrf7rngmO9bXXCqXczNIHgtqwswLH1KuTBP+5h4cF7fGehwb8CODE1JAD84TOqAHEiMWpAdKOoOwBsQP0CKGCwYUBFYgBkAEmDwEAAQEBAgEDAQQBBQABBgEHAQgBCQgAAAAAAAAAAwgAAAAAAAAACQgAAAAAAAAACiF7Im5hbWUiOiJhbGdvX3BsYWNlIiwidiI6IjAuMC4wIn0kNQAxGEEJoScGZEkkWzUBJVs1AjEZIhJBAAoxACghBq9mQgltNhoAF0lBBIwkNQQiNQZJIQwMQAHoSSENDEABFUkhDgxAAJ9JIQ8MQAB4SSEQDEAAUSEQEkQ0AUkjDEAAMiMSRChkKWRQKmRQK2RQJwRkUCcFZFAnB2RQJwhkUCcJZFAnCmRQSTUDIRElWDUHQgkNIhJEKGQpZFBJNQNXoAg1B0II+iEPEkQ0AUkjDEAACiMSRCcLNQdCCOQiEkQnCzUHQgjaIQ4SRDQBSSMMQAAKIxJEJww1B0IIxCISRCcMNQdCCLpJIRIMQABIIRISRDQBSSMMQAAyIxJEKGQpZFAqZFArZFAnBGRQJwVkUCcHZFAnCGRQJwlkUCcKZFBJNQMhEyVYNQdCCHUiEkQlrzUHQghrIQ0SRDQBSSMMQAAKIxJEJw01B0IIVSISRCcNNQdCCEtJIRQMQACLSSEVDEAAcUkhFgxAABohFhJENhoBNhoCUDX/JwU0/1CBnQGvUEIDUiEVEkQ0AUkjDEAAMSMSRChkKWRQKmRQK2RQJwRkUCcFZFAnB2RQJwhkUCcJZFAnCmRQSTUDVwAgNQdCB98iEkQoZClkUEk1A1cAIDUHQgfMIRQSRCcGNf8rNP9QIQWvUEIC70khFwxAABMhFxJEJwY1/yk0/1AhBa9QQgLVIQwSRDQBSSMMQAAKIxJEJws1B0IHiSISRCcLNQdCB39JIRgMQAE1SSEZDEAA9EkhGgxAAJxJIRsMQABCIRsSRDQBSSMMQAAbIxJEJa82GgGIB3JJNf9XAQg0/yRVTTUHQgc8IhJEJa82GgGIB1dJNf9XAQg0/yRVTTUHQgchIRoSRDQBSSMMQAA0IxJEKGQpZFAqZFArZFAnBGRQJwVkUCcHZFAnCGRQJwlkUCcKZFBJNQOB1wchClg1B0IG4SISRChkKWRQSTUDVyCANQdCBs4hGRJENAFJIwxAADIjEkQoZClkUCpkUCtkUCcEZFAnBWRQJwdkUCcIZFAnCWRQJwpkUEk1AyEcJVg1B0IGkCISRChkKWRQSTUDV7AINQdCBn1JIR0MQAATIR0SRCcGNf8oNP9QIQWvUEIBmSEYEkQ0AUkjDEAACiMSRCcONQdCBk0iEkQnDjUHQgZDSSEeDEAA40khHwxAAItJISAMQABkISASRDQBSSMMQAAzIxJEKGQpZFAqZFArZFAnBGRQJwVkUCcHZFAnCGRQJwlkUCcKZFBJNQMhISEHWDUHQgXvIhJEIQivSTX/SVA0/1A0/1A0/1A0/1A0/1A0/1A0/1A1B0IFyiEfEkQ2GgE2GgJQNhoDUDYaBFA2GgVQNf8qNP9QQgDgIR4SRDQBSSMMQAAyIxJEKGQpZFAqZFArZFAnBGRQJwVkUCcHZFAnCGRQJwlkUCcKZFBJNQMhIiVYNQdCBWwiEkQoZClkUEk1A1eoCDUHQgVZSSEjDEAAUyEjEkQ0AUkjDEAANCMSRChkKWRQKmRQK2RQJwRkUCcFZFAnB2RQJwhkUCcJZFAnCmRQSTUDgdcIISRYNQdCBRIiEkQoZClkUEk1A1e4FTUHQgT/gaTP1UUSRCcGNf8nBDT/UCEFr1BCAB42GgIXNQQ2GgM2GgEXSSIMQAMESSEJDEACgyEJEkQjNAESRDQESSQSTDQCEhFEKGQpZFAqZFArZFAnBGRQJwVkUCcHZFAnCGRQJwlkUCcKZFBJNQNJSkpXACA1/1cgIDX+gUAhB1g1/SEhIQdYNfyBogYhBVg1+yETWzX6STUFNfmABJMevtA0+VCwNPkkVUkhCQxAATdJIwxAAPdJIQsMQACuIQsSRDT5VwEQNfg0+CRbNfc0+CVbNfY09yEGDEQ09iEJDESACAAAAAAAAAABMQCIBDlJNfRXAQg09CRVTRdJNfUiDUQyBjQDIRFbD0QyBjQDISJbDkQ09TQDIRxbCDIGDkQxACgpMgYWUGaACAAAAAAAAA19MgYWULAyBhY1BzT/NP40/TT8JCEINPcLUjT2FikxAFBQUDT8IQhJNPcLCCEHUlA0+yI0+jIGQgKCSDT6gQoORDEAiAOxJFUkEkQxACgpMgYWUGaACAAAAAAAAAyEMgYWULAyBhY1BzT/NP40/TT8NPsiNPoiCDIGQgJASDT6JA1EMQCIA3AkVSISRDEAKCEGr2aACAAAAAAAAAuRsCcGNQc0/zT+NP00/DT7IjT6IgkyBkICBkkiDEAAo0mBAgxAAHVINPlXAa01+DT4VwCANfc0+CEKWzX2NPghJVs19TT4ISZbNfQxADT/EkQ09wE0/hNENPY09QxENPU09g1ENPQkD0SACAAAAAAAAAqXsCcGNQc0/zT+NP00/DT4V5gVNPQWUDT1FlA091A09hZQIjT6MgZCAYRIMQA0/xJEgAgAAAAAAAAJZ7AnBjUHNP80/jT9STT7IjT6MgZCAV1IMQA0/xJEgAgAAAAAAAAIVLAnBjUHNP80/jT9STT7JDT6MgZCATYiEkQiNAESRDQESSQSTDQCEhFEKGQpZFBJNQNXACA1/4AEmouRdLA0/zEAEkQhCK9JNf5JUDT+UDT+UDT+UDT+UDT+UDT+UDT+UDX9NP80A1fNIDT9STQDV7gVNANXsAhQNANXqAhQNANXIIBQNANXoAhQIiQyBkIAvEiBoI0GiAH+JDQBEkQ0BEkkEkw0AhIRREk1BUlKSVcAgDX/IQpbNf4hJVs1/SEmWzX8V5gVNfuABPTil+s0/1A0/hZQNP0WUDT8FlA0+1CwgCA4cjouXooXqnlQ3ACCCZROiY9pp70QojyDnTQek1/VyjX6NP8BNPoTRDT+NP0MRDT9NP4NRDT8JA9EMQA0/1A0/hZQNP0WUDT8FlA0+1A0+lAoSwFXAH9nKUsBV39uZ0giNQEyBjUCQgDoNf81/jX9Nfw1+zX6Nfk1+DT9QQC0NPxXJYA19zT8VwAVNfY0/IGlAVs19TT8gR1bNfQ0/CEkWzXzNPg0+VA0+lA0+1A0/FA0/hZQNPdQNPZQNPUWUDT0FlA08xZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBgf0CIQRYZycESwGB/AMhBFhnJwVLAYH7BCEEWGcnB0sBgfoFIQRYZycISwGB+QYhBFhnJwlLAYH4ByEEWGcnCksBgfcIgQ1YZ0gjNQEyBjUCQgAfQgAAMRkhCxJEsSSyASSyCCKyEDIJsgkyCrIHs0IABTEZJBJEJwY0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSIIMgQSRDEWEkQiQzEZJBJEQv/fJDE0EkSBCzE1EkQkMTYSRCIxNxJEJDUBJDUCQv+tSTEYYUAABUghBq+JKGKJNABJSiIINQA4BzIKEkQ4ECISRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 10,
  stateSize: 1156,
  unsupported: [],
  version: 10,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:164:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:302:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:175:72:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Deployer": Deployer,
  "GameMaster_destroyGame": GameMaster_destroyGame,
  "GameMaster_resetBoard": GameMaster_resetBoard,
  "GameMaster_updateGameRules": GameMaster_updateGameRules,
  "Player_exitGame": Player_exitGame,
  "Player_joinGame": Player_joinGame,
  "Player_setTile": Player_setTile
  };
export const _APIs = {
  GameMaster: {
    destroyGame: GameMaster_destroyGame,
    resetBoard: GameMaster_resetBoard,
    updateGameRules: GameMaster_updateGameRules
    },
  Player: {
    exitGame: Player_exitGame,
    joinGame: Player_joinGame,
    setTile: Player_setTile
    }
  };
