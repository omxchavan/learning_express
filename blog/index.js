const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())




app.listen(3000, () =>
  console.log("> Server is up and running on port : " + 3000)
);
