const express = require('express');

 
const app =express();

app.get("/",(req,res) =>{
    res.send("we are at home page")
})

app.get("/about",(req,res) =>{
    res.send("we are at about")
})

app.listen(3000 ,()=>{
    console.log("server has started")
})