const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

router.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
  });

router.get("/signup", (req, res) => {
  res.send("<h1>Sign-up Page</h1>");
});

router.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

module.exports = router;