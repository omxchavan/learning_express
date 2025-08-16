const express = require("express");
const { handleUserSignup } = require("../controllers/user");
const { handleUserLogin } = require("../controllers/user");
const { handleLogout } = require("../controllers/user");
const {verifyUser} = require('../middleware/auth')

const router = require("express").Router();

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.get("/logout",verifyUser, handleLogout);
module.exports = router;
