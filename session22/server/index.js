let calculate = require("./calculator");

let calculation = new calculate();

let numbers = [7, 4, 6, 3, 6, 8, 0, 23, 465, 21];

let addition = calculation.add(numbers[0], numbers[5]);
let multiplication = calculation.multiply(numbers[3], numbers[8]);
let division = calculation.divide(numbers[0], numbers[6]);
console.log(`${numbers[0]} + ${numbers[5]} = ${addition}`);
console.log(`${numbers[3]} x ${numbers[8]} = ${multiplication}`);
console.log(`${numbers[0]} / ${numbers[6]} = ${division}`);
