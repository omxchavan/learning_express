const express = require("express");
const { handleUserSignup } = require("../controllers/user");
const {handleUserLogin} = require('../controllers/user')

const router = require("express").Router();

router.post("/signup", handleUserSignup);
router.post("/login",handleUserLogin);

module.exports = router;
