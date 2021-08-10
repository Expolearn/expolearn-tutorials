// MEAN /MERN: M =  MongoDB, E = Express, A = Angular, N = Nodejs, R = React.
// Assignment: What are the different ports that can run nodejs on a local host?
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("bodyParser");
const http = require("http");

// const app = express();

const PORT = 4200;

const hostname = "127.0.0.1";

// app.use("cors");
// app.use("bodyParser");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/plain");
  if ((res.status = "200")) {
    res.end("Now connected!");
  }
  //   req.send("Hello world!");
});

server.listen(PORT, hostname, () => {
  console.log(`This app is running on ${hostname}:${PORT}`);
});
