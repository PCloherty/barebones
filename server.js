const express = require("express");


const app=express();

app.get("/",(req,res)=>res.send("Server Running"));

//route definitions
//app.use('/api/example', require('./routes/api/example'))

const PORT = process.env.PORT || 5000;

app.listen( PORT,() => console.log(`Server online on Port ${PORT}`))