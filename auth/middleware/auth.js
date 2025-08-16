const jwt = require("jsonwebtoken");

function verifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    req.user=null;
     return next() //returns null meaning no user is loged in
  }

  try {
    const user = jwt.verify(token, "shhhhh"); 
    req.user=user;
    next(); // proceed only if token is valid
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return res.redirect("/login"); // stop execution if invalid
  }
}

module.exports = {
  verifyUser,
};
