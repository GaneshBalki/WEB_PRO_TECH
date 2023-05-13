import express from "express";
let app=express()
app.set('views',"./views")
app.set('view engine','hbs')
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/calculator',(req,res)=>{
    var sum=0 
let n1=req.query.num1
let n2=req.query.num2
let n3=req.query.num3

let r
switch (n3) {
    case 'sub':
         r= parseInt(n1)-parseInt(n2)
         res.render("calc",{result:r})
        break;
    case 'sum':
        r= parseInt(n1)+parseInt(n2)
        res.render("calc",{result:r})
         break;
    default:
        break;
}


})

app.listen(3501,()=>{
    console.log("Server is running on port 3500")
})