interface Order {
  status: string;
  paymentMethod: string;
  amount: number;
}

function processOrder(order: Order): string {
  if (order.status === "shipped") {
    return "Order has already been shipped";
  }

  if (order.status === "cancelled") {
    return "Order has been cancelled";
  }

  if (order.status !== "pending") {
    return "Unknown order status";
  }

  if (order.paymentMethod === "creditCard") {
    if (order.amount > 100) {
      return "Apply discount and process credit card payment";
    } else {
      return "Process credit card payment";
    }
  }

  if (order.paymentMethod === "paypal") {
    return "Process PayPal payment";
  }

  return "Invalid payment method";
}

const order: Order = {
  status: "pending",
  paymentMethod: "creditCard",
  amount: 150,
};
console.log(processOrder(order));
