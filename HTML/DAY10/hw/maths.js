import { Router } from "express"
let obj=Router()
export default obj;

obj.post("/sum/:num1/:num2",(req,res)=>{
    let n1=parseInt(req.params.num1)
    let n2=parseInt(req.params.num2)
    res.send(`${n1+n2} this is maths`)
    console.log("Maths.js is called")
})
obj.post("/square/:num1",(req,res)=>{
    let n=parseInt(req.params.num1)
    res.send(`The Square os ${n} is ${n*n}`)
})
