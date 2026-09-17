//Merge two sessions' trades
const morningTrades = ['NABIL-100', 'NICA-250'];
const afternoonTrades = ['ADBL-0', 'SBI-500'];

const allTrades = [...morningTrades, ...afternoonTrades]; // combine both arrays here using spread

console.log(allTrades);
console.log(morningTrades); // should be unchanged

//Clone a fixture, override one field
const baseFixture = { symbol: 'NABIL', type: 'BUY', price: 1250, qty: 100 };

const bigOrder = {...baseFixture, qty:1000}; // clone baseFixture, but qty should be 1000

console.log(bigOrder);
console.log(baseFixture.qty); // should still be 100

//Rest parameters + the shallow-copy trap
// Part A
function sumQty(...amounts) {
  // sum them up
  return amounts.reduce((total,n) => total + n, 0);
}
console.log(sumQty(100, 250, 60));

// Part B
const order = { symbol: 'SBI', fees: ['brokerage', 'sebon'] };
const clone = { ...order };
clone.fees.push('dp-charge');

console.log(order.fees);  // did this change too?