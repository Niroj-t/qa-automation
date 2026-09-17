//try / catch / finally around bad data
const rawResponse = '{ symbol: "NABIL", price: 1250 '; // missing closing brace + unquoted key

let trade;
try {
  trade = JSON.parse(rawResponse);
  console.log(trade);
} catch (err) {
  console.log('Failed to parse trade:', err.message);
} finally {
  console.log('Parse attempt finished — cleaning up resources');
}

//throw on invalid input
function validateTrade(trade) {
  if (trade.qty < 0) throw new Error(`Invalid qty for ${trade.symbol}: ${trade.qty}`);
  if (trade.price <= 0) throw new Error(`Invalid price for ${trade.symbol}: ${trade.price}`);
  return true;
}

const badTrade = { symbol: 'ADBL', price: 0, qty: 50 };
try {
  validateTrade(badTrade);
  console.log('Trade is valid');
} catch (err) {
  console.log('Validation failed:', err.message);
}

//Custom error classes
