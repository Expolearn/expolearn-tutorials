// var a = document.getElementById("users");
const fs = require("fs");
const users = fs.readFileSync("./users.json", "utf-8");

var Users = JSON.parse(users);
for (var i = 0; i < Users.length; i++) {
  //   `<ul>
  // "<li> Username +${User.name}</li>"+

  // "<li> Username +${User.age}</li>"+
  // "<li> Username +${User.city}</li>"
  //     </ul>`;

  console.log(Users[i]);
  if (Users[i].name == "Ramavhale") {
    console.log("This is Ramavhale");
  }
}
