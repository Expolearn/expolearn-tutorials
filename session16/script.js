"user strict";
var arr = [1, 2, 5, 10, 54, 65, 76, 213, 43, 65, 65, 76, 78];

for (let i = 12; i >= 0; i--) {
  console.log(arr[i]);
}
var arr1 = [8, 0.32, 43];
var arr_result = [...arr, ...arr1]; //Spread operator
console.log(arr_result);

let person = {
  userName: "Joel",
  email: "joel@mail.com",
  password: "12345",
};

const basic_details = {
  name: person.userName,
  e_mail: person.email,
  others: (person.prototype = {
    PhoneNumber: "0784656523",
    Address: "452 george",
  }),
};

for (let i in basic_details) {
  console.log(basic_details[i]);
}

// Assignment

// create list of users with each users having basic details and roles such as admin, staff, student, cleaner.
// Create a basic details viewer which shows to a particular person some details and not to the other person.

// leetcode
// console.log(basic_details);
