// Create a list of users
let users = [
  (user1 = {
    id: 1,
    firstname: "Tshifiwa ",
    surname: "Sinugo",
    phoneNumber: " 067 345 4556",
    EmailAddress: "myemail@mail.com ",
    password: " 9832iuhvssjhNalDi12HSAdd",
    salary: 30000,
    age: 23,
    gender: "Male",
    profession: "developer",
  }),
  (user2 = {
    id: 2,
    firstname: "ramavhale ",
    surname: "murendeni",
    phoneNumber: " 078 253 4546",
    EmailAddress: "myemail1@mail.com ",
    password: " 9832iuhvsADVjlDi12HSAdd",
    salary: 30000,
    age: 17,
    gender: "Male",
    profession: "developer",
  }),
  (user3 = {
    id: 3,
    firstname: "Dj Zinhle ",
    surname: "Muremie",
    phoneNumber: " 065 902 8492",
    EmailAddress: "myemail2@mail.com ",
    password: " 9832iAvu41VjlDi12HSAdd",
    salary: 40000,
    age: 30,
    gender: "Female",
    profession: "manager",
  }),
];

let salaryDetails = 0;
let basic_details = "";
let isTenager = " Is a tenager";

for (let i = 0; i < users.length; i++) {
  if (users[i].id == 3) {
    users[i].salary = salaryDetails;
    users[i].prototype = {
      message: "This is the manager",
    };
    basic_details += `\nFirst name: ${users[i].firstname}\n Surname:${users[i].surname}\n Gender: ${users[i].gender}\n Message: ${users[i].prototype.message} \n \n`;
  }
  if (users[i].id == 0 || users[i].id == 1) {
    basic_details += `\nFirst name: ${users[i].firstname}\n Surname:${users[i].surname}\n Gender: ${users[i].gender}\n Salary ${users[i].salary}\n Message: ${isTenager}\n`;
  }
}
console.log(basic_details);
