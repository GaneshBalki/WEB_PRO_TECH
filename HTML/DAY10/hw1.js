import { Router } from "express";
let guestrouter = Router();
export default guestrouter;

let guestlist=["abc","pqr","xyz"]
guestrouter.get('/',(req, res)=>{
res.send(guestlist);
})
guestrouter.get('/all',(req, res)=>{
     
    let gl= guestlist.map((e)=>{let str =""; return str.concat((guestlist.indexOf(e)+1),"." ,e)});
    res.send(gl);
    })
guestrouter.post('/add',(req,res)=>{
    let nm = req.query.gname;
    guestlist.push(nm)
    res.send(`added ${nm} new ${guestlist}`)
})
guestrouter.get('/count',(req,res)=>{
    res.send(`guest count ${guestlist.length}.`)
})
guestrouter.post('/changeguestname/:ix/:nm',(req,res)=>{
    let idx = req.params.ix;
    let newname=req.params.nm;
    if(idx<guestlist.length && idx>-1)
    {guestlist[idx]=newname
        res.send(` new guest list ${guestlist}.`)}
    else{
        res.send(`index out of bound`)
    } 
   
})

guestrouter.delete('/removeguest/:ix',(req,res)=>{
     let idx=req.params.ix -1
     if(idx<=guestlist.length && idx>=0)
      {guestlist.splice(idx,1)
        res.send(` new guest list ${guestlist}.`)}
    else{
        res.send(`index out of bound`)
    } 
})