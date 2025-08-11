class Calculator {
  static PI = 3.14;

  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
}
const myCalculator = new Calculator();
console.log(Calculator.add(1, 2));
console.log(Calculator.subtract(1, 2));

console.log(Calculator.PI);
