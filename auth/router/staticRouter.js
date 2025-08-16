const express = require("express");
const {verifyUser} = require('../middleware/auth')

const router = require("express").Router();

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login",(req,res) =>{
    res.render("login")
})

router.get("/",verifyUser,(req,res) =>{
  res.render("index", { user: req.user || null });
})




module.exports = router;
