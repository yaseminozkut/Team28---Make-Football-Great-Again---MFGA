const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURL } = require("./keys");

const PORT = 4000;

mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(PORT, () =>
  console.log("The server is successfully built on port", PORT)
);
