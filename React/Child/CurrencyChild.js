import { useState } from "react"
export default function CurrencyChild({num1,f5}){
  
let n1=parseInt(num1)

let [from,setfrom]=useState(1)
 let [to,setto]=useState(1)

 let [res,setres]=useState(1)
    function f1(e){
       setfrom(e.target.value)
    }
    function f2(e){
       setto(e.target.value)
    }
    
    function convertor(){
        switch(from)
        {
            case "IN":
                if(to==="IN"){setres(n1)}
                else if(to==="US"){setres(n1/82.41)}
                break;
            case "US":
                if(to==="US"){setres(n1)}
                else if(to==="IN"){setres(n1*82.41)}
                break;
            default:
        }
    }
    f5(res)

return(
    <div>
        <select onChange={f1}>
            <option value="IN">IND</option>
            <option value="US">USD</option>
        </select>
        <select onChange={f2}>
            <option value="IN">IND</option> 
            <option value="US">USD</option>
        </select>
        <button onClick={convertor}>Convert</button><br></br><br></br>
       
    </div>
)

}