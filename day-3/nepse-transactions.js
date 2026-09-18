const transactions = [
  { id: 1, symbol: 'NABIL', type: 'BUY',  qty: 10, price: 512 },
  { id: 2, symbol: 'ADBL',  type: 'SELL', qty:  5, price: 240 },
  { id: 3, symbol: 'NABIL', type: 'BUY',  qty:  8, price: 505 },
  { id: 4, symbol: 'HDL',   type: 'SELL', qty: 12, price: 630 },
  { id: 5, symbol: 'ADBL',  type: 'BUY',  qty: 20 /* price missing! */ },
];

/* custom error — reject invalid trades */
class InvalidTradeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidTradeError';
  }
}

/* destructuring — unpack each record */
function validateTrade({ id, price }) {
  if (price === undefined) {
    throw new InvalidTradeError('price is missing');
  }
  return true;
}

/* map — a readable label for each trade */
const labels = transactions.map(({ id, symbol, type, qty }) =>
  `#${id} ${type} ${qty} ${symbol}`
);
console.log('1)', labels.join(' | '));

/* filter — only the BUY transactions */
const buys = transactions.filter(t => t.type === 'BUY');
console.log(`2) BUY count: ${buys.length}`);

/* Task: find — the first NABIL trade */
const firstNabil = transactions.find(t => t.symbol === 'NABIL');
console.log(`3) First NABIL trade id: ${firstNabil.id}`);

/* reduce — total value of all trades */
const totalValue = transactions.reduce(
  (sum, t) => sum + t.qty * (t.price ?? 0),
  0
);
console.log(`4) Total value of all trades: Rs ${totalValue}`);

/* ?. and ?? — handle the missing price */
const trade5 = transactions[4];
console.log(`5) #${trade5.id} ${trade5.symbol}: Rs ${trade5.price ?? 'N/A'}        // ?. and ?? handled the missing price`);

/* template literals — print a report + trigger the custom error */
transactions.forEach(t => {
  try {
    validateTrade(t);
  } catch (err) {
    if (err instanceof InvalidTradeError) {
      console.log(`6) #${t.id} INVALID -> Transaction ${t.id}: ${err.message}`);
    }
  }
});

/* Bonus: total spent on BUY trades */
const spentOnBuys = transactions
  .filter(t => t.type === 'BUY')
  .map(t => t.qty * (t.price ?? 0))
  .reduce((sum, val) => sum + val, 0);
console.log(`Bonus) Total spent on BUY trades: Rs ${spentOnBuys}`);