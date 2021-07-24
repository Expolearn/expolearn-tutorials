const axios = require("axios");
axios
  .get("https://api.github.com/users")
  .then((response) => {
    let users = response.data;
    const users_id_less_than_10 = users.filter((user) => user.id < 10);
    const user = " ";
    for (let i = 0; i < users_id_less_than_10.length; i++) {
      console.log(users_id_less_than_10[i].login);
    }
  })
  .catch((err) => console.error(err));
