class ShippingMethod {
  private readonly costPerKg: number;
  private readonly deliveryTimeInDays: number;

  private constructor(costPerKg: number, deliveryTimeInDays: number) {
    this.costPerKg = costPerKg;
    this.deliveryTimeInDays = deliveryTimeInDays;
  }

  static Standard = new ShippingMethod(5, 5);
  static Express = new ShippingMethod(10, 2);
  static Overnight = new ShippingMethod(20, 1);

  public calculateCost(weight: number): number {
    return weight * this.costPerKg;
  }

  public getEstimatedDeliveryTime(): number {
    return this.deliveryTimeInDays;
  }
}

const weight = 10; // 10 kg package
const shipping = ShippingMethod.Express;

const cost = shipping.calculateCost(weight); // 10 * $10 = $100
const deliveryTime = shipping.getEstimatedDeliveryTime(); // 2 days

console.log(`Shipping cost: $${cost}, Delivery time: ${deliveryTime} days`);
