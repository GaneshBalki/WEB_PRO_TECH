import { Router } from "express" 
import express from 'express'
let obj2=Router()
export default obj2
obj2.use(express.json())

obj2.post('/product',(req,res)=>{
    let p=req.body.pname
    let p1=req.body.pcost
    res.send(`product name is ${p} and cost is ${p1}`)
})
