// const http = require("http");
const express = require("express");
// const cors = require("cors");

const hostname = "127.0.0.1";
const port = 3000;

// Use express as a server
const app = express();

// app.use(cors); // Use cors

app.get("/", (req, res) => {
  res.writeHead({
    contentType: "application/utf8",
  });
});

app.put("/profile", (req, res) => {
  res.send(" Put method here");
});

app.post("/message", (req, res) => {
  res.send(" Post method here");
});

app.delete("/delete", (req, res) => {
  res.send("Delete method here");
});

// Create a http server and connect

// server = http.createServer(port, (req, res, next) => {
//   res.writeHead({
//     contentType: "application/json",
//   });
//   res.end(JSON.stringify(req.body));
// });

app.listen(port, () => {
  console.log(`The server is listening on ${hostname}:${port}`);
});
