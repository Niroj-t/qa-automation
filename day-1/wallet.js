const merchantName = "Qrius Store";
let balancePaisa = 250000;         // Rs 2,500.00
const isKycVerified = true;

const amountPaisa = 150000;        // Rs 1,500.00
const cashbackPaisa = amountPaisa * 0.02;

// TODO 1: Check if the transfer can go through:
// balance must cover the amount, KYC must be verified, and amount must be positive
const canSend = balancePaisa >= amountPaisa && isKycVerified && amountPaisa > 0;

if (canSend) {
  // TODO 2: update balancePaisa after the transfer
  balancePaisa-= amountPaisa;
}

// TODO 3: Print the receipt using a single template literal
console.log(`Merchant : ${merchantName}
KYC      : ${isKycVerified ? "verified" : "not verified"}
Sent     : Rs ${(amountPaisa / 100).toFixed(2)}
Cashback : Rs ${(cashbackPaisa / 100).toFixed(2)}
Balance  : Rs ${(balancePaisa / 100).toFixed(2)}
Approved : ${canSend}`);