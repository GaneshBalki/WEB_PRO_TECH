import express from "express"
let app=express()
app.get("/",(req,res)=>{
     res.send("This is Homepage")
})
// app.post("/login",(req,res)=>{
//     let user=req.query.uname
//     let pwd=req.query.password
//     res.send(`this is user ${user} and pass is ${pwd}`) 
// })
app.post("/factorial/:number",(req,res)=>{
    let num=req.params.number
    let fact=1
    for(let i=1;i<=num;i++)
    {
        fact=fact*i
    }
    res.send(`The factorial of ${num} is ${fact}`)
})
app.post("/prime/:num",(req,res)=>{
    let nums=req.params.num
    let flag=true
    for(var i=2;i<nums/2;i++)
       {
          if(nums%i==0){
            flag=false
          }
       }
       if(flag==true){
        res.send(`${nums} is prime`)
       }else{
        res.send(`${nums} is not prime`)
       }
})
app.listen(5002,(req,res)=>{
    console.log("HELLO My Name is server !!!!")
})