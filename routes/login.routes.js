const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
var bcrypt = require("bcryptjs");
const User = require("../DB/User");

router.get("/login", (req, res) => {
  req.mongoose.user();
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const dbUser = User.findOne({ email })
    .then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        res.json(user);
      } else {
        res.status(400).json("user not found!");
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
