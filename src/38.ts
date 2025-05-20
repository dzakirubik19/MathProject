// This is a simple example showing how to use TypeScript with a basic calculator

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

// Example usage
const result = add(5, 3);
console.log(result); // Output: 8

result = subtract(5, 3);
console.log(result); // Output: 2

result = multiply(4, 6);
console.log(result); // Output: 24

result = divide(10, 2);
console.log(result); // Output: 5
