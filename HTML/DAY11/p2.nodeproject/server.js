import express from "express";
let app=express()
app.set('views',"./views")
app.set('view engine','hbs')


app.get("/",(req,res)=>{
    res.send("WELCOME TO INDIA")
})

app.get("/login",(req,res)=>{
    res.sendFile("C:\\CDAC\\HTML\\DAY11\\p2.nodeproject\\login.html")
})

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }))
var arr=[{"user":"Ganesh","pass":1234},{"user":"Shamim","pass":1234}]
app.get("/home",(req,res)=>{
    let user=req.query.uname
    let pwd=req.query.password
 
    let a=arr.find(e=> e.user==user && e.pass==pwd)
      if(a != undefined)
      {
        res.render("welcom",{username:user})
      }else{
        res.sendFile("C:\\CDAC\\HTML\\DAY11\\p2.nodeproject\\login.html")}
      
})


app.get("/createAc",(req,res)=>{
    res.sendFile("C:\\CDAC\\HTML\\DAY11\\p2.nodeproject\\createAC.html")
})

app.get("/create",(req,res)=>{
    let user=req.query.cname
    let pwd=req.query.cpassword
     
    arr.push({"user":user,"pass":pwd})
    res.sendFile("C:\\CDAC\\HTML\\DAY11\\p2.nodeproject\\login.html")
   // res.json(arr)
      
})
app.get('/all',(req,res)=>{
    res.send(arr)
})

app.listen(5200,()=>{
    console.log("Abhi mai jinda hu")
})