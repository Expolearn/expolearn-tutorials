// Fetch API call using callback function and promise
const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].address.geo.lat >= -37.3159 ||
        users[i].address.geo.lng >= 21.8984
      ) {
        console.log("user is out of normal/secure zone");
        // notifyUsers(users[i]);
      }
    }
  })
  .catch((err) => console.error(err));

//Method 2 using Async await
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}

getUsers().then((data) => {
  const users_id_less_than_5 = data.filter((item) => item.id < 5);
  const add_admin = users_id_less_than_5.map((item) => (item.isAdmin = true));
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 0, 7, 6, 45, 34, 65, 7];
  let users = ["Joel", "sinugo"];
  let sum = 0;
  const multiply = numbers.map((n) => n ** 2);
  const addNumbers = users.reduce((prev, next) => prev + next);
  //   console.log(addNumbers);
  //   console.log(multiply);
  for (let i = 0; i < users_id_less_than_5.length; i++) {
    // console.log(users_id_less_than_5[i]);
  }
});

// Assignment
// Call this api:https://jsonplaceholder.typicode.com/users
// Display each user's details on the browser and style each users details with links that can send to email box and access call functionality
// Use the following methods to implement:
// Axios API call method
// Fetch API methods ( Using promise and async await)
