//Template literals
const symbol = 'Global'
const qty = 100;
const price = 1000;
// old style — rewrite this line using backticks
const message = 'Confirmed: BUY' + qty + ' ' + symbol + '@ Rs.' + price +'(total: '+ (qty*price)+')';
console.log(message);
// using template literals
const msg = `Confirmed: BUY ${qty} ${symbol} @ Rs.${price} (total: ${qty*price})`;
console.log(msg);

//Multi-line test report footer
const testName = 'Place market order';
const status = 'PASSED';
const timestamp = '12:30:07';

// write a single backtick string spanning 3 lines
const footer = `Test: ${testName}
Status: ${status}
Timestamp: ${timestamp}`
console.log(footer);

//Conditional label inline
const trade = { symbol: 'NICA', type: 'SELL', qty: 250 };

// build this in one console.log using a ternary inside ${ }
console.log(`${trade.symbol} ${trade.type==='BUY' ? 'BUY' : 'SELL'} ${trade.qty}`);