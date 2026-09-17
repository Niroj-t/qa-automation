//Safe nested access
const trade = { symbol: 'NABIL', broker: { name: 'Prabhu Securities' } };

// this would throw: trade.broker.license.number
//const licenseNo = null; // fix this line
const licenseNo = trade.broker?.license?.number ?? 'N/A';

console.log(licenseNo);

//Optional call on a maybe-missing method
const orderA = { id: 1, cancel: () => console.log('order 1 cancelled') };
const orderB = { id: 2 }; // no cancel method

// call cancel on both safely
orderA.cancel?.();
orderB.cancel?.();
console.log('done — no crash on orderB');

//Nullish coalescing vs ||
const cancelledTrade = { symbol: 'ADBL', qty: 0 };

const safeQty = cancelledTrade.qty || 100;
const correctQty = cancelledTrade.qty ?? 100;
console.log('with ||:', safeQty);   // 100 — wrong, treats 0 as falsy
console.log('with ??:', correctQty); // 0 — correct, 0 is not null/undefined