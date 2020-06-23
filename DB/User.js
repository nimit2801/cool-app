const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
  department: {
    type: String,
  },
  registered_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("newUser", newUser);
