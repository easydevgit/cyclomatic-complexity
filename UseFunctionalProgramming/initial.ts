function processNumbers(numbers: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result.push(numbers[i] * 2);
    }
  }

  return result;
}

const numbers = [1, -2, 3, -4, 5];
console.log(processNumbers(numbers)); //

//// Use pure functions

interface Product {
  name: string;
  price: number;
  quantity: number;
}

let totalPrice = 0;

function calculateTotalPrice(cart: Product[]): void {
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }
}

// Usage
const cart: Product[] = [
  { name: "Apple", price: 1.5, quantity: 2 },
  { name: "Banana", price: 1.0, quantity: 3 },
  { name: "Orange", price: 2.0, quantity: 1 },
];

calculateTotalPrice(cart);
console.log(totalPrice);
