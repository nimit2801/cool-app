const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//mongoose connecting to mongoDB
const connectDB = require("./DB/conection");
const user = require("./DB/User");
connectDB();

app.get("/", (req, res) => {
  res.send("<h1>HEllo sucKerS newing! still goood</h1>");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes called
const loginRoute = require("./routes/login.routes");
const signupRoute = require("./routes/signup.routes");
const userRoute = require("./routes/user.routes");

// app.post("/signup", userModel);

app.post("/login", loginRoute);
app.post("/signup", signupRoute);
app.get("/user", userRoute);

app.listen(port, () => {
  console.log("running!");
});
