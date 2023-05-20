import { useState } from "react";
import axios from "axios";

export default function UpdateEmployee(){
    let name,sname
    let [employee,setEmployee]=useState({emp:null})
    function handler(){
        let obj={user:name,surname:sname}
               let p=axios.put("https://reqres.in/api/users/",obj)
               p.then((res)=>{
                   setEmployee({emp:res})
               })
    }



    return(<div>
        <h1>Update Employee</h1>
    <input type="text" placeholder="Enter Name" onBlur={((e)=>{name=e.target.value})}></input>
    <input type="text" placeholder="Enter Surname" onBlur={((e)=>{sname=e.target.value})}></input>
    <button onClick={handler}>Submit</button>
    
<p>{employee.emp==null ? "NOT Updated":JSON.stringify(employee.emp.data)}</p>
    </div>)
}