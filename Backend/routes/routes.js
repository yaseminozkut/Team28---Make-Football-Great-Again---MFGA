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

router.post("/signup", (req, res) => {
  var { name, email, password, username } = req.body;
  console.log(req.body);
  if (!name || !email || !password || !username) {
    return res.status(422).json({ error: "Add all data" });
  }
  User.findOne({ email: email })
  .then((savedUser) => {
    if (savedUser) {
      return res
        .status(422)
        .json({ error: "User already exists with that email" });
    }
    const user = new User({
      email,
      password,
      name,
      username,
    });
    user.save()
    .then((user) => {
      res.json({ message: "Saved successfully" });
      console.log(user.email);
    })
    .catch((err) => {
      console.log(err);
    });
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;