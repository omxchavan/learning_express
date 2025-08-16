const mongoose = require("mongoose");
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

module.exports = {
  Users,
};
