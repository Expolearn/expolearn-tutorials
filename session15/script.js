// var btn = document.getElementById("btn");
var loadUserDetails = () => {
  var output = "";
  for (var i in user1) {
    output += "<ul>" + "<li>" + user1[i] + "</li>" + "<ul>";
  }
  user.innerHTML = output;
};
// if (btn) {
//   console.log("btn available");
//   btn.addEventListener("click", loadUserDetails);
// }
// var user = document.getElementById("user");

var users = [
  {
    name: "Joel",
    email: "joel@mail.com",
    age: "10",
    gender: "Male",
  },
  {
    name: "linda",
    email: "linda@mail.com",
    age: "12",
    gender: "Female",
  },
];

// console.table(users);
// console.log(users[0].name);

for (var i in users) {
  console.table(users[i].name);
}
