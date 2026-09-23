interface Payment {
  id: string;
  amount: number;
  status: "pending" | "completed" | "failed";
}

interface Response<T> {
  success: boolean;
  data: T;
}

const paymentResponse: Response<Payment> = {
  success: true,
  data: {
    id: "pay_123",
    amount: 49.99,
    status: "completed",
  },
};

const messageResponse: Response<string> = {
  success: true,
  data: "Payment processed successfully",
};

console.log(paymentResponse.data.amount); 
console.log(messageResponse.data);        