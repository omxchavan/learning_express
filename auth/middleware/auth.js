const jwt = require("jsonwebtoken");

function verifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/login"); // stop execution
  }

  try {
    const user = jwt.verify(token, "shhhhh"); // use process.env.JWT_SECRET in real apps
    req.user = user; // attach payload
    next(); // proceed only if token is valid
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return res.redirect("/login"); // stop execution if invalid
  }
}

module.exports = {
  verifyUser,
};
