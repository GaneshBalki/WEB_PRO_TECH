import express from "express";
let app=express()

import obj from './maths.js'
app.use("/abc",obj)
import obj1 from './prime.js'
app.use("/abc",obj1)

app.listen(5000,()=>{
    console.log("listening 5000............")
})