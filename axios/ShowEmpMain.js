import { useState } from "react";
import axios from "axios";

export default function Parent(){
    let id=0
    let [arr,setArr]=useState([])

    function ShowData(){
       return arr.map((Employee)=>{
           return(
              Employee.first_name
           )
        })
    }


    function handler(){
        let p=axios.get(`https://reqres.in/api/users/${id}`)
        p.then((res)=>{
            let a=res.data
            arr.push(a)
            setArr([...arr])
        })
    }




    return(<div>
        <input type="number" placeholder="Enter ID" onBlur={((e)=>{id=e.target.value})}></input>
        <button onClick={handler}>SHOW</button>
        {ShowData}
    </div>)
}