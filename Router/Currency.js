import { useState } from "react"


export default function Currency(){
    var [from,setFrom]=useState(0);
    var [to,setTo]=useState(0);
    var [num,setNum]=useState(0);
    var [result,setRes]=useState(0);
    function handler(){
        console.log("inside handler"+from+typeof(from)+" to ->"+to+" num->"+num+"type of num ->"+typeof(num))
        
      switch(parseInt(from)){
        case 1:
            if(parseInt(to)==1){
              setRes(parseFloat(num));
                
            }
            else if(parseInt(to)==2){
                setRes(parseFloat(num)*81.95)
            }
            break;
        case 2:
            if(parseInt(to)==2){
                setRes(parseFloat(num));
            }
            else if(parseInt(to)==1){
                setRes(parseFloat(num)/81.95)
            }
            break;
      }
    }

    return(
        <div>
            <select onChange={((e)=>{setFrom(e.target.value)})}>
                <option value={0}>From</option>
                <option value={1}>Rupee</option>
                <option value={2}>Dollar</option>
            </select><br></br><br></br>
            <select onChange={((e)=>{setTo(e.target.value)})}>
                <option value={0}>To</option>
                <option value={1}>Rupee</option>
                <option value={2}>Dollar</option>
            </select><br></br><br></br>
            <input type="number" onBlur={((e)=>{setNum(e.target.value)})}></input>
            <button onClick={handler}>Calculate</button>
            <p>{result}</p>
        </div>
    )
}