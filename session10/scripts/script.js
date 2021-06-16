// data types

var a = 5; //Implicit data type
let b = 12;
const pi = 3.143;

// Object
var myobj = {
  a: 18,
  b: "Ramavhale",
};

var user = {
  firstname: "",
  surname: " ",
  nickname: " ",
  phoneNumber: 00000000000,
  PhysicalAddress: " ",
  education: " ",
  Password: "",
  age: myobj.a,
};

console.log(myobj);
console.log(myobj.a);
console.log(myobj.b);
console.table(user);

// function
function add(a, b) {
  return a + b;
}

console.log(add(1, 4));

function concati() {
  return a + " " + b;
}

console.log(concati());

//Modern js function definition

const concat = () => {
  return a + " " + b;
};

console.log(concat());

concati = b;

var result;

if (a <= 5 && b > 10) {
  result = b - a;
} else if (a > 10 && b < 5) {
  result = a - b;
} else {
  console.log("Hmmmm!!!1");
}
var choice;

switch (choice) {
  case 1:
    console.log(choice + 1);
    break;
  case 2:
    console.log(choice + 2);
    break;
  case 3:
    console.log(choice + 3);
    break;
  case 4:
    console.log(choice + 4);
    break;
  case 5:
    console.log(choice + 5);
    break;
}

for (let i = 1; i < 10; i++) {
  console.log(i);
}

console.log(user.age <= 18);

console.log(typeof result == "number");
