import { Router } from "express";
let maths=Router()
export default maths

maths.get('/doSquare/:n1',(req,res)=>{
    let n=req.params.n1

    res.send(`square of ${n} is ${n*n} `)
});
maths.post('/cube/:num',(req,res)=>{
    let n=req.params.num
    res.send(`cube is ${n*n*n}`)
});

