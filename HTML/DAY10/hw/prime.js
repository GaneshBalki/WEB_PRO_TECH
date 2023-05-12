import { Router } from "express";
let obj1=Router()
export default obj1
obj1.post("/prime/:num1",(req,res)=>{
    let n=parseInt(req.params.num1)
    
    console.log("This is Prime")
    let flag=true
    for(let i=2;i<n;i++){
        if(n%i==0)
        {
            flag=false
        }
        if(flag==true){
            res.send(`${n} is a prime number`)
        }
        else{
            res.send(`${n} is not a prime number`)
        }
    }
})
