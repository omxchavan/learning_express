const { Users } = require("../model/user");
const jwt = require('jsonwebtoken')

async function handleUserSignup(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.send("enter all fields");
    }
    await Users.create({
      email: email,
      password: password,
    });
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.send("enter all fields");
    }
    const user = await Users.findOne({
      email: email,
      password: password,
    });
    if(!user){
        return res.redirect("/signup")
    }
    var token = jwt.sign({ "email" : email }, "shhhhh");
    res.cookie("token", token).redirect("/url");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  handleUserSignup,handleUserLogin
};
