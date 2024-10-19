interface Order {
  status: string;
  paymentMethod: string;
  amount: number;
}

function processOrder(order: Order): string {
  let result = "";

  if (order.status === "pending") {
    if (order.paymentMethod === "creditCard") {
      if (order.amount > 100) {
        result = "Apply discount and process credit card payment";
      } else {
        result = "Process credit card payment";
      }
    } else if (order.paymentMethod === "paypal") {
      result = "Process PayPal payment";
    } else {
      result = "Invalid payment method";
    }
  } else if (order.status === "shipped") {
    result = "Order has already been shipped";
  } else if (order.status === "cancelled") {
    result = "Order has been cancelled";
  } else {
    result = "Unknown order status";
  }

  return result;
}

// Usage
const order: Order = {
  status: "pending",
  paymentMethod: "creditCard",
  amount: 150,
};
console.log(processOrder(order));
