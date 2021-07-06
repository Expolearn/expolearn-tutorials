const read = require("readline");

var userInput = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var gender;
var username = userInput.question(
  "Enter your details as follow\
  \n1. Username\n 2. Physical Address \n 3. Gender\n 4. Age\n",
  (userName, email, gender, age) => {
    //TODO: log the answer in a database
    console.log(`Thank you for giving your name ${userName}`);
    console.log(`Thank you for giving your physical address: ${email}`);
    console.log(`Thank you. your gender: ${age}`);
    console.log(`Thank you. your age: ${gender}`);
    userInput.close();
  }
);

if ((gender == "Male" || gender == "male") && age <= 18) {
  console.log(`You are a {gender}`);
} else if (gender == "Female" || gender == "female") {
  console.log(" You are a Male");
}
