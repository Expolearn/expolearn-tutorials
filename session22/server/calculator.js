class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(x, y) {
    return x + y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    let result = 0;
    try {
      result = x / y;
    } catch (e) {
      e = new Error(`{y} is zero`);
      console.log(e);
    }
  }
}

module.exports = Calculator;
