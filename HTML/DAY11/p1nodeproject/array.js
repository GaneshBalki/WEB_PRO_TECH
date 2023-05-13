//import express from 'express'

import { Router } from 'express'
let obj=Router()
export default obj

 let arr=["Ganesh","Balki"]
 obj.post("/add",(req,res)=>{
    arr.push(req.query.name)
    res.send(arr)
 })