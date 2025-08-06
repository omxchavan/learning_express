const express = require('express');
const users = require('./test_data.json');
const fs = require('fs');


//created a server
const app= express();

//port listening 
const port = 3000;


//middleware
app.use(express.urlencoded({extended : false}));

app.use((req,res,next)=> {
    console.log("i am middleware 1")
    next();
})


 app.use( (req,res,next) =>{
    console.log("I am middleware 2 ")
    next()
 })


//get for home
app.get("/",(req,res) => {
    res.send("we are at home")
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


//post route to add users
app.post("/users", (req,res) => {
    const data = req.body;
    console.log(data);
    users.push({...data, id: users.length +1});
    fs.writeFile("./test_data" , JSON.stringify(users),(err,data) => {
        res.json({status : "succesful" })
    })

})

//route for put request
app.put("/users",(req,res) =>{
    const userId=Number(req.body.id);
    console.log(userId);
    res.json({ status : "working"})
})



app.listen(port,() => {
    console.log("app listening on port "+port)
})