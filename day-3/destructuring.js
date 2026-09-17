//Skip a value in an array
const watchlist = ['NABIL', 'NICA', 'ADBL', 'SBI'];

// destructure so you get: top = 'NABIL', third = 'ADBL'
const [top, , third] = watchlist;

console.log(top, third);

//Rename and default a field
const trade = { symbol: 'ADBL', price: 410 };

// destructure: unitPrice (from price), qty (default 1)

const {symbol, price: unitPrice, qty=1} = trade;
console.log(unitPrice, qty);

//Destructure a function parameter
function placeOrder({ symbol, type, qty = 0 }) {
  return `${type} order for ${qty} ${symbol}`;
}
console.log(placeOrder({ symbol: 'SBI', type: 'BUY' }));