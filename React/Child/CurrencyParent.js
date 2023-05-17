import { useState } from "react"
import CurrencyChild from "./CurrencyChild"
export default function CurrencyParent()
{
 let [from,setfrom]=useState(1)
 let [Result,setResult]=useState(0)
    

 function handler1(e)
{
  setfrom(e.target.value)
}
function fun(e){
    setResult(e)
}


return(
    <div>
        <label>From</label><input type="number" onBlur={handler1}/>
     
        <CurrencyChild num1={from} f5={fun} ></CurrencyChild>
        <p>{Result}</p>
    </div>
)

}