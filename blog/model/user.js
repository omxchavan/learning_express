const mongoose = require("mongoose");

mongoose.connect("").then((req, res) => {
  console.log("database connected");
});

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      required: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model(user, userSchema);

module.exports = {
  User,
};
