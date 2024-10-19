function calculateShippingCost(weight: number, shippingMethod: string): number {
  if (shippingMethod === "Standard") {
    return weight * 5; // $5 per kg
  } else if (shippingMethod === "Express") {
    return weight * 10; // $10 per kg
  } else if (shippingMethod === "Overnight") {
    return weight * 20; // $20 per kg
  }
  return 0;
}

function getEstimatedDeliveryTime(shippingMethod: string): number {
  if (shippingMethod === "Standard") {
    return 5; // 5 days
  } else if (shippingMethod === "Express") {
    return 2; // 2 days
  } else if (shippingMethod === "Overnight") {
    return 1; // 1 day
  }
  return 0;
}

const shippingCost = calculateShippingCost(10, "Standard");
const deliveryTime = getEstimatedDeliveryTime("Standard");

console.log(
  `Shipping cost: ${shippingCost}, Delivery time: ${deliveryTime} days`
);
