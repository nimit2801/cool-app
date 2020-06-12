const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//mongoose connecting to mongoDB
const connectDB = require("./DB/conection");
const user = require("./DB/User");
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static("build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

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
