import e, { Router } from "express";
import express from 'express'
let productrouter = Router();
export default productrouter
productrouter.use(express.json())
let arr=[]
productrouter.post('/add',(req,res)=>{
    arr.push(req.body)
    res.send(arr)
})

productrouter.get('/all',(req,res)=>{
   
    res.json(arr)
})
productrouter.get('/getInfo',(req,res)=>{
    let id=req.query.productId
   let prd=arr.find(p=>p.productId==id)
    if(prd!=undefined)
    {
    res.json(prd)
    }
    else
    res.send("product not found")  
})
productrouter.put('/changecost/:productId/:costPerUnit',(req,res)=>{
    let pid=req.params.productId
    let cost=req.params.costPerUnit
    let prd=arr.find(p=>p.productId==pid)
    prd.costPerUnit=cost
    res.json(prd)
    
})
productrouter.delete('/remove/:productId',(req,res)=>{
    let pid=req.params.productId
    let prd=arr.find(p=>p.productId==pid)
    let p1=arr.indexOf(prd)
    arr.splice(p1,1)
    res.json(arr)

})
