import express, { json } from 'express'

let app= express()
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }));


app.set("views","./views")
app.set("view engine",'hbs')

let arr=[{username:"xxx",password:"123"},
{username:"abc",password:"234"}]

app.get("/",(req,res)=>{
    res.render("login")
})
app.use(json())


app.post("/verifyLogin",(req,res)=>{
    let curr_usrname = req.body.usrname
    let curr_usrpwd = req.body.password
    console.log(curr_usrname,curr_usrpwd)
    let flag= false
    for(let i =0 ; i<arr.length;i++){
        if(arr[i].username===curr_usrname && arr[i].password===curr_usrpwd)
        {
            res.send("login Sucesssful")
            flag=true
            break;
        }
    }
    if(flag==false){
        res.send("Wrong Credentials")
            flag=true
    }
})



app.get('/maths',(req,res)=>{
    res.render("maths")
})

app.post('/calculator',(req,res)=>{
    let t=req.body.num
    console.log(t)
     let fact=1
     for(var i=1;i<=t;i++)
     {
        fact=fact*i
     }
    res.send({fact})
    console.log(fact)
})
app.listen('4000', ()=>{
    console.log("app is listening at 4000")
})