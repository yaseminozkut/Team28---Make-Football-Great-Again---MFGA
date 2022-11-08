const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { MONGOURL } = require("./config/index");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// require db connection
require("./models/user");

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const routes = require("./routes/userRoute");

app.use(express.static('client/build'));
// routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", () => {
  console.log("ERROR !!!");
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
