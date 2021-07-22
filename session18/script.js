$(document).ready(function () {
  let user = document.getElementById("users");

  getuser = function () {
    $.ajax({
      url: "https://api.github.com/users",
      type: "GET",
      success: function (users) {
        var result = "";
        console.log(users);
        for (var i in users) {
          result +=
            '<div class="user">' +
            "<img class='user_img' src=" +
            users[i].avatar_url +
            "<ul> " +
            "<li>ID: " +
            users[i].id +
            "</li>" +
            "<li>Login:" +
            users[i].login +
            "</li>" +
            "<li>Events URL:" +
            users[i].events_url +
            "</li>" +
            "<li>Is a site admin:" +
            users[i].site_admin +
            "</li>" +
            "</ul>" +
            "</div>";
        }
        user.innerHTML = result;
      },
    });
  };
  document.getElementById("btn").addEventListener("click", getuser);
});
