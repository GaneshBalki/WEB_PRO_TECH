import express from "express";
let app=express()
app.set('views',"./views")
app.set('view engine','hbs')

import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/login",(req,res)=>{
    res.render("login.hbs")
})


var arr=[{"user":"Ganesh","pass":1234},{"user":"Shamim","pass":1234}]
app.post("/home",(req,res)=>{
    let user=req.body.uname
    let pwd=req.body.password
 
    let a=arr.find(e=> e.user==user && e.pass==pwd)
      if(a != undefined)
      {
        res.render("welcom",{username:user})
      }else{
        res.render("login.hbs")}
      
})


app.get("/createAc",(req,res)=>{
    res.render("createAC.hbs")
})

app.post("/create",(req,res)=>{
    let user=req.body.cname
    let pwd=req.body.cpassword
     
    arr.push({"user":user,"pass":pwd})
    res.render("login.hbs")
   // res.json(arr)
      
})
app.get('/all',(req,res)=>{
    res.json(arr)
})

app.listen(5200,()=>{
    console.log("Abhi mai jinda hu")
})