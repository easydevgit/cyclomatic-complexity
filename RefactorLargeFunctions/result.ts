interface Order {
  status: string;
  paymentMethod: string;
  amount: number;
}

function processOrder(order: Order): string {
  if (order.status === "pending") {
    return processPendingOrder(order);
  } else if (order.status === "shipped") {
    return "Order has already been shipped";
  } else if (order.status === "cancelled") {
    return "Order has been cancelled";
  } else {
    return "Unknown order status";
  }
}

function processPendingOrder(order: Order): string {
  if (order.paymentMethod === "creditCard") {
    return processCreditCardPayment(order);
  } else if (order.paymentMethod === "paypal") {
    return "Process PayPal payment";
  } else {
    return "Invalid payment method";
  }
}

function processCreditCardPayment(order: Order): string {
  if (order.amount > 100) {
    return "Apply discount and process credit card payment";
  } else {
    return "Process credit card payment";
  }
}

const order: Order = {
  status: "pending",
  paymentMethod: "creditCard",
  amount: 100,
};
console.log(processOrder(order));
