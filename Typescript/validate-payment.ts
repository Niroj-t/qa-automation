// validate() checks a payment and returns a message
interface Payment {
    amountPaisa: number;
    status: "SUCCESS" | "PENDING" | "FAILED";
}

function validate(payment: Payment){
  if (payment.amountPaisa <= 0) {
    return "Amount must be positive";
  }
  if (payment.status !== "SUCCESS") {
    return "Not a successful payment";
  }
  return `Valid: ${payment.amountPaisa} paisa`;
}

console.log(validate({
  //amountPaisa: "50000", status: "SUCESS"
  amountPaisa: 50000, status: "SUCCESS"
}));