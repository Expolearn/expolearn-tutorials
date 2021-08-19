const mongoose = require("mongoose");
const port = 3000;
const databaseUrl = `127.0.0.1${port}`;

const MongoDb = mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", console.error.bind(" Failed to connect to the database"));
