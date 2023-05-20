import { useState } from "react"


export default function Login(){

  let [uname,setuname]=useState("")
  let [pass,setpass]=useState("")
  let [message,setmessage]=useState("")
    const arr=[
        { unam: "xxx" ,pword :"123"},
        { unam: "rrr" ,pword :"13"},
        { unam: "xeex" ,pword :"23"},]        
 
function handler1(e)
{
    setuname(e.target.value)

}
function handler2(e)
{
    setpass(e.target.value)
}
function verify()
{   
 
    for(var i=0;i<arr.length;i++)
    {   
        if(arr[i].unam===uname && arr[i].pword===pass){
           setmessage("SUCCESSFUL LOGIN")
           break;
        }
        else{ setmessage("FAILED")}

    }
}

return(
    <div>
        <input type="text" placeholder="Enter your Name" onBlur={handler1}/>
        <input type="password" placeholder="Enter your password" onBlur={handler2}/>
        <input type="submit" value="submit" onClick={verify}/>
        <p>{message}</p>
    </div>
)

}

