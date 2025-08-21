
const express = require('express')

const app = express()



app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(3000 , ()=> console.log('> Server is up and running on port : ' + 3000))