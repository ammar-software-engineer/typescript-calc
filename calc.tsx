type Operator = "+" | "-" | "*" | "/" | "%";

class Calculator {
  private value: number = 0;

  clear(): void {
    this.value = 0;
  }

  calculate(a: number, b: number, op: Operator): number {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) throw new Error("Error");
        return a / b;
      case "%":
        return a % b;
      default:
        throw new Error("Invalid");
    }
  }

  apply(op: Operator, num: number): number {
    this.value = this.calculate(this.value, num, op);
    return this.value;
  }

  getValue(): number {
    return this.value;
  }
}

const calc = new Calculator();

console.log("Start:", calc.getValue());
console.log("+ 10 =", calc.apply("+", 10));
console.log("* 5  =", calc.apply("*", 5));
console.log("- 20 =", calc.apply("-", 20));
console.log("/ 3  =", calc.apply("/", 3));
console.log("% 4  =", calc.apply("%", 4));
