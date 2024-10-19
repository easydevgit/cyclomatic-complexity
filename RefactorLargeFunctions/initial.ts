interface Order {
  status: string;
  paymentMethod: string;
  amount: number;
}

function processOrder(order: Order): string {
  if (order.status === "pending") {
    if (order.paymentMethod === "creditCard") {
      if (order.amount > 100) {
        return "Apply discount and process credit card payment";
      } else {
        return "Process credit card payment";
      }
    } else if (order.paymentMethod === "paypal") {
      return "Process PayPal payment";
    } else {
      return "Invalid payment method";
    }
  } else if (order.status === "shipped") {
    return "Order has already been shipped";
  } else if (order.status === "cancelled") {
    return "Order has been cancelled";
  } else {
    return "Unknown order status";
  }
}

const order = {
  status: "pending",
  paymentMethod: "creditCard",
  amount: 100,
};
console.log(processOrder(order)); // Output: processOrder(order);
