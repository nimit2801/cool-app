const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../DB/User");
var bcrypt = require("bcryptjs");
// const database = require("./database");

router.post("/signup", async (req, res) => {
  const { name, username, email, password, phone, department } = req.body;
  let user = {};
  user.name = name;
  user.username = username;
  user.email = email;
  user.password = bcrypt.hashSync(password, 8);
  user.phone = phone;
  user.department = department;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = router;
