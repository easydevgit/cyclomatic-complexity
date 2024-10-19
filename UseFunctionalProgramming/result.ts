function processNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number > 0).map((number) => number * 2);
}

const numbers = [1, -2, 3, -4, 5];
console.log(processNumbers(numbers)); //

//// Use pure functions

interface Product {
  name: string;
  price: number;
  quantity: number;
}

function calculateTotalPrice(cart: Product[]): number {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

// Usage
const cart: Product[] = [
  { name: "Apple", price: 1.5, quantity: 2 },
  { name: "Banana", price: 1.0, quantity: 3 },
  { name: "Orange", price: 2.0, quantity: 1 },
];

const totalPrice = calculateTotalPrice(cart);
console.log(totalPrice);
