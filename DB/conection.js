const mongoose = require("mongoose");

const URI =
  "mongodb+srv://Nimit2801:Nimit2801@cluster-tb0ny.mongodb.net/the-college-app?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
