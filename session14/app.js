const read = require("readline");

var username = read("Enter your user: ");
var gender = read("Enter your gender: ");
var age = read("Enter your age: ");

if ((gender == "Male" || gender == "male") && age <= 18) {
  console.log(`You are a {gender}`);
} else if (gender == "Female" || gender == "female") {
  console.log(" You are a Male");
}
