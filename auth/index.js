const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./router/url");
const userRoute = require("./router/user");
const staticRouter = require("./router/staticRouter");
const cookieParser = require('cookie-parser')
const {verifyUser} = require('./middleware/auth')

const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())


// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

mongoose
  .connect(
    "mongodb+srv://om:samartha@cluster0.1l9hbkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  });


app.use("/", userRoute);
app.use("/", staticRouter);
app.use("/",verifyUser, urlRoute);


app.listen(3000, () => {
  console.log("app listening on port 3000");
});
