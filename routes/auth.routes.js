const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../DB/User");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@route POST api/signup
//@desc Signip user
//@access PUBLIC

router.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  User.findOne({ email }).then((newusers) => {
    if (!newusers) return res.status(400).json({ msg: "User doesnot exist" });
  });
});
module.exports = router;
