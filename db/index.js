import express, { json, urlencoded } from "express";
import mongoose from "mongoose";

// express server
const app = express();

// middleware

// for url encoded requests
app.use(urlencoded({ extended: false }));

//for json resquets
app.use(express.json());

// connecting mongo db here i have not give my credentials
mongoose
  .connect(
    "mongodb+srv://<db username>:<db password>@cluster0.1l9hbkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongo db connected");
  });

//user schema
const userShema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// model for databse
const Users = mongoose.model("users", userShema);

//get rout for all users
app.get("/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("internal server error");
  }
});

// post route
app.post("/users", async (req, res) => {
  const body = req.body;
  if (!body.email || !body.password) {
    return res.status(300).send("enter all fields");
  }

  try {
    const body = req.body;
    const user = { email: body.email, password: body.password };
    await Users.create(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//app listening on port
app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
