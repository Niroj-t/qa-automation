//map — turn trades into totals

const trades = [
  { symbol: 'NABIL', type: 'BUY',  price: 1250, qty: 100, brokerId: 34 },
  { symbol: 'NICA',  type: 'SELL', price: 780,  qty: 250, brokerId: 12 },
  { symbol: 'ADBL',  type: 'BUY',  price: 410,  qty: 0,   brokerId: 34 },
  { symbol: 'SBI',   type: 'SELL', price: 610,  qty: 500, brokerId: 51 },
  { symbol: 'NABIL', type: 'SELL', price: 1265, qty: 60,  brokerId: 12 },
];

//const totals = trades; // use map here
const totals = trades.map(t => t.price * t.qty);

console.log(totals);

//filter — keep only real BUY trades
const trades1 = [
  { symbol: 'NABIL', type: 'BUY',  price: 1250, qty: 100, brokerId: 34 },
  { symbol: 'NICA',  type: 'SELL', price: 780,  qty: 250, brokerId: 12 },
  { symbol: 'ADBL',  type: 'BUY',  price: 410,  qty: 0,   brokerId: 34 },
  { symbol: 'SBI',   type: 'SELL', price: 610,  qty: 500, brokerId: 51 },
  { symbol: 'NABIL', type: 'SELL', price: 1265, qty: 60,  brokerId: 12 },
];

const realBuys = trades1.filter(t => t.type === 'BUY' && t.qty > 0);
console.log(realBuys);

//find, some, every, includes
const trades2 = [
  { symbol: 'NABIL', type: 'BUY',  price: 1250, qty: 100, brokerId: 34 },
  { symbol: 'NICA',  type: 'SELL', price: 780,  qty: 250, brokerId: 12 },
  { symbol: 'ADBL',  type: 'BUY',  price: 410,  qty: 0,   brokerId: 34 },
  { symbol: 'SBI',   type: 'SELL', price: 610,  qty: 500, brokerId: 51 },
  { symbol: 'NABIL', type: 'SELL', price: 1265, qty: 60,  brokerId: 12 },
];

const firstSell = trades2.find(t => t.type === 'SELL');        // find() the first SELL trade
const hasBigTrade = trades.some(t => t.price * t.qty > 500000);     // some() trade with price*qty > 500000
const allHaveBroker = trades.every(t => t.brokerId != null);    // every() trade has a brokerId
const symbols = trades.map(t => t.symbol);
const hasSBI = symbols.includes('SBI');          // includes() 'SBI' in symbols

console.log(firstSell, hasBigTrade, allHaveBroker, hasSBI);

//Chain filter → map → reduce
const trades3 = [
  { symbol: 'NABIL', type: 'BUY',  price: 1250, qty: 100, brokerId: 34 },
  { symbol: 'NICA',  type: 'SELL', price: 780,  qty: 250, brokerId: 12 },
  { symbol: 'ADBL',  type: 'BUY',  price: 410,  qty: 0,   brokerId: 34 },
  { symbol: 'SBI',   type: 'SELL', price: 610,  qty: 500, brokerId: 51 },
  { symbol: 'NABIL', type: 'SELL', price: 1265, qty: 60,  brokerId: 12 },
];

const sellTurnover = trades3
  .filter(t => t.type === 'BUY')
  .map(t => t.price * t.qty)
  .reduce((sum, val) => sum + val, 0);
console.log(sellTurnover);