const express = require('express');
const users = require('./test_data.json');

//created a server
const app= express();

//port listening 
const port = 3000;

//get for home
app.get("/",(req,res) => {
    res.end("we are at home")
})

//for all users get
app.get("/users",(req,res) => {
    res.json(users)
})

//dynamic user data
app.get("/users/:id",(req,res) => {
    const id= Number(req.params.id);
    console.log(id)
    const user = users.find(user => user.id===id);
    res.json(user);
})


app.listen(port,() => {
    console.log("app listening on port "+port)
})