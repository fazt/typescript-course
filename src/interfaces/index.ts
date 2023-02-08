// Basic interface
interface IProduct {
  name: string;
  readonly price: number; // readonly is a modifier
  description?: string;
}

const product: IProduct = {
  name: "laptop",
  price: 1000,
  description: "good laptop",
};

// product.price = 2000; // error

// Interfaces with Functions
interface MathFunction {
  (a: number, b: number): number;
}

const sum: MathFunction = (a, b) => a + b;
const subtract: MathFunction = (a, b) => a - b;
const multply: MathFunction = (a, b) => a * b;
const divide: MathFunction = (a, b) => a / b;

const mod: MathFunction = (a: number, b: number) => a % b;

console.log(sum(10, 20));
console.log(subtract(10, 20));
console.log(multply(10, 20));
console.log(divide(10, 20));