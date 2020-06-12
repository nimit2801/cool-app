const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URI = process.env.ATLAS_URI;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
