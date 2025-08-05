const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
//basic server 

const myServer = http.createServer((req,res) =>{
    console.log("welcome to my server");

// log out put for data.txt
    const log=`${Date.now()} : ${req.method}\n`;

//using fs for file handling
    fs.appendFile("data.txt",log,(err,data) => {
        res.end("data recieved")

    });
 // parsind the url to get proper formatted data
    const myurl=url.parse(req.url)
    console.log(myurl)

//learning url basics
   
    switch(req.url){
        case "/" :
            res.end("this is home page")
        break;
        case "/about":
            res.end("this is about page ")
        break;
    }
   
    
})

myServer.listen(3000,()=>{
console.log("server started")
}
)