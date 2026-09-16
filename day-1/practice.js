//var vs let
if (true) {
  var a = "leaks";
  let b = "contained";
}
console.log(a);  // "leaks"
console.log(b);  // ReferenceError: b is not defined

//if, else if, else
    /*
const balancePaisa = 250000;   // Rs 2,500
const amountPaisa  = 300000;   // Rs 3,000

if (amountPaisa > balancePaisa) {
  console.log("Insufficient balance");
} else if (amountPaisa === 0) {
  console.log("Enter an amount");
} else {
  console.log("Proceed to PIN");
}
*/

//Comparison and logical operators
const isKycVerified = true;
const balancePaisa  = 250000;
const amountPaisa   = 150000;
const dailyLimit    = 2500000;   // Rs 25,000

const canSend =
  isKycVerified &&
  amountPaisa > 0 &&
  amountPaisa <= balancePaisa &&
  amountPaisa <= dailyLimit;

if (!canSend) console.log("Blocked");

//Truthy and falsy
const cashbackPaisa = 0;   // valid: no cashback

// Looks fine. Is a bug.
if (cashbackPaisa) {
  console.log("Cashback applied");
} else {
  console.log("Cashback missing");
}

// What you actually meant
if (cashbackPaisa !== undefined) { /* ... */ }

//Ternary operator
// condition ? valueIfTrue : valueIfFalse
//const isKycVerified = false;
//const tier = isKycVerified ? "Verified" : "Basic";
//const limitPaisa = isKycVerified ? 2500000 : 500000;
//console.log(`${tier} account, limit Rs ${limitPaisa / 100}`);

//switch
const gateway = "khalti";

switch (gateway) {
  case "esewa":
    console.log("Redirect to eSewa");
    break;
  case "khalti":
    console.log("Open Khalti widget");
    break;
  case "connectips":
    console.log("Bank login page");
    break;
  default:
    console.log("Unsupported gateway");
}

// fall-through example (missing break)
// fall-through example (missing break)
switch ("esewa") {
  case "esewa":
    console.log("Redirect to eSewa");
    // no break
  case "khalti":
    console.log("Open Khalti widget");
    break;
}

//for loop
//   start        test        step
for (let i = 0; i < 3; i++) {
  console.log(`Retry attempt ${i + 1}`);
}

const banks = ["NIC Asia", "Nabil", "Global IME"];

// Correct: < length
for (let i = 0; i < banks.length; i++) {
  console.log(banks[i]);
}

// Broken: <= length
for (let i = 0; i <= banks.length; i++) {
  console.log(banks[i]);   // last one: undefined
}

//for...of and for...in
const wallets = ["eSewa", "Khalti", "IME Pay"];

for (const wallet of wallets) {
  console.log(`Checking ${wallet}`);
}


for (const w in wallets) {
  console.log(w);   // 0, 1, 2  (the keys!)
}

// On an object, keys are what you want:
const txn = { id: "TXN-9001", amount: 150000 };
for (const key in txn) {
  console.log(`${key}: ${txn[key]}`);
}

//break and continue
const amounts = [50000, 120000, -3000, 80000];

for (const amt of amounts) {
  if (amt < 0) {
    console.log(`Corrupt data: ${amt}. Stopping.`);
    break;
  }
  console.log(`Processed Rs ${amt / 100}`);
}

const amount = [50000, 0, 120000, 0, 80000];
let totalPaisa = 0;

for (const amt of amounts) {
  if (amt === 0) continue;   // skip empties
  totalPaisa += amt;
}

console.log(`Total Rs ${totalPaisa / 100}`);

//Parameters, arguments and defaults
// paisa, rate = parameters (the placeholders)
function cashback(paisa, rate = 0.02) {
  return Math.round(paisa * rate);
}

// 150000, 0.05 = arguments (the real values)
console.log(cashback(150000, 0.05));  // 7500
console.log(cashback(150000));         // 3000
console.log(cashback());               // NaN

//return, and the silent undefined
// Returns a value you can use
function feeFor(paisa) {
  if (paisa <= 10000) return 0;
  if (paisa <= 100000) return 500;
  return 1500;
}

// Prints, but returns nothing
function showFee(paisa) {
  console.log(`Fee: ${feeFor(paisa)}`);
}

const a = feeFor(50000);    // 500
const b = showFee(50000);   // undefined

//Array
const gateways = ["eSewa", "Khalti", "IME Pay"];

console.log(gateways[0]);            // "eSewa"
console.log(gateways.length);       // 3
console.log(gateways[gateways.length - 1]); // "IME Pay"
console.log(gateways[3]);            // undefined

gateways.push("ConnectIPS");       // add to end
gateways.pop();                     // remove from end
gateways.unshift("Fonepay");        // add to front
gateways.shift();                   // remove from front

//Array methods
const amounts1 = [50000, 150000, 0, 2700000];

amounts.includes(0);          // true
amounts.indexOf(150000);      // 1
amounts.indexOf(999);         // -1
amounts.find(a => a > 1000000); // 2700000
amounts.filter(a => a > 0);    // [50000, 150000, 2700000]
amounts.map(a => a / 100);      // [500, 1500, 0, 27000]

//Objects
const txn1 = {
  id: "TXN-90114",
  gateway: "esewa",
  amountPaisa: 150000,
  isVerified: true,
};

console.log(txn.gateway);          // "esewa"

const field = "amountPaisa";
console.log(txn[field]);           // 150000

txn.amountPaisa = 200000;         // update
txn.remarks = "Tuition fee";       // add a new key

console.log(txn.customer);         // undefined, no error

//Example
const txn = {
  id: "TXN-90114",
  customer: {
    name: "Niroj Thapa",
    kyc: { level: 2, verified: true },
  },
};

console.log(txn.customer.kyc.level);       // 2
console.log(txn.merchant.name);            // TypeError!

//Array of objects (test data)
const transactions = [
  { id: "TXN-01", gateway: "esewa",  amountPaisa: 150000, verified: true  },
  { id: "TXN-02", gateway: "khalti", amountPaisa: 0,      verified: true  },
  { id: "TXN-03", gateway: "esewa",  amountPaisa: 2700000,verified: false },
];

let approved = 0;

for (const txn of transactions) {
  if (!txn.verified) {
    console.log(`${txn.id} KYC pending`);
    continue;
  }
  if (txn.amountPaisa <= 0) {
    console.log(`${txn.id} invalid amount`);
    continue;
  }
  approved++;
  console.log(`${txn.id} approved, Rs ${txn.amountPaisa / 100}`);
}

console.log(`${approved} of ${transactions.length} approved`);
