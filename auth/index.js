const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./router/url");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://om:samartha@cluster0.1l9hbkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  });

app.use("/", urlRoute);

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
