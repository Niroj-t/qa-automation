// eSewa-style transaction validator

const balancePaisa = 500000; // Rs 5,000
const perTxnLimitPaisa = 2500000; // Rs 25,000

const batch = [
  { id: "TXN-01", gateway: "esewa", amountPaisa: 15000, verified: true }, 
  { id: "TXN-02", gateway: "khalti", amountPaisa: 0, verified: true }, 
  { id: "TXN-03", gateway: "esewa", amountPaisa: 2700000, verified: true }, 
  { id: "TXN-04", gateway: "connectips", amountPaisa: 120000, verified: false }, 
  { id: "TXN-05", gateway: "paypal", amountPaisa: 50000, verified: true }, 
  { id: "TXN-06", gateway: "esewa", amountPaisa: 600000, verified: true }, 
];

function feeFor(amountPaisa) {
  //// TODO: if / else if ladder, return paisa
  if (amountPaisa <= 10000) {
    return 0;
  } else if (amountPaisa <= 100000) {
    return 500;
  } else {
    return 1500;
  }
}

function validate(txn) {
  // TODO: return a reason string, or "OK"
  if (txn.amountPaisa <= 0) {
    return "Invalid amount";
  } else if (!txn.verified) {
    return "KYC pending";
  } else if (txn.amountPaisa > perTxnLimitPaisa) {
    return "Exceeds per-transaction limit";
  } else if (txn.amountPaisa > balancePaisa) {
    return "Insufficient balance";
  } else if (
    txn.gateway !== "esewa" &&
    txn.gateway !== "khalti" &&
    txn.gateway !== "connectips"
  ) {
    return "Unsupported gateway";
  } else {
    return "OK";
  }
}

// TODO: switch, with a default
function route(gateway) {
  switch (gateway) {
    case "esewa":
      console.log("Redirect to eSewa");
      break;
    case "khalti":
      console.log("Redirect to Khalti");
      break;
    case "connectips":
      console.log("Redirect to ConnectIPS");
      break;
    default:
      console.log("Redirect to unknown gateway");
  }
}

let approvedCount = 0;
let rejectedCount = 0;
let totalValuePaisa = 0;

// TODO: for...of over batch, continue on rejection, keep totals
for (const txn of batch) {
  const reason = validate(txn);

  if (reason !== "OK") {
    rejectedCount++;
    console.log(`${txn.id}  REJECTED  ${reason}`);
    continue;
  }

  approvedCount++;
  totalValuePaisa += txn.amountPaisa;

  const fee = feeFor(txn.amountPaisa);
  const amountRupees = (txn.amountPaisa / 100).toFixed(2);
  const feeRupees = (fee / 100).toFixed(2);

  console.log(`${txn.id} OK Rs ${amountRupees} fee Rs ${feeRupees}`);
  route(txn.gateway);
}

const totalValueRupees = (totalValuePaisa / 100).toFixed(2);

// TODO: one template literal for the summary
console.log(
  `\nApproved ${approvedCount} · Rejected ${rejectedCount} · Value Rs ${totalValueRupees}`,
);
