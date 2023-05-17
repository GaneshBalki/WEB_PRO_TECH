import { useState } from "react"
import Child from "./Child"
  export default function Parent(){

  let [n1,setn1]=useState(0)
  let [n2,setn2]=useState(0)
  let [Result,setResult]=useState(0)

function fun(e)
{
   setResult(e)
}

    return(
        <div>
            <input type="number" name="num1" onBlur={(e)=>{setn1(e.target.value)}}></input><br></br>
            <input type="number" name="num2" onBlur={(e)=>{setn2(e.target.value)}}></input><br></br>
            <p>{Result}</p>
            <Child num1={n1} num2={n2} f1={fun}></Child>
        </div>
    )
  }