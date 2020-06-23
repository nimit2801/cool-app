const mongoose = require("mongoose");
// const config = require("config");
// const URI = config.get("ATLAS_URI");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Nimit2801:Nimit2801@cluster-tb0ny.mongodb.net/the-college-app?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  );
  console.log("db connected..!");
  // console.log(URI);
};

module.exports = connectDB;
