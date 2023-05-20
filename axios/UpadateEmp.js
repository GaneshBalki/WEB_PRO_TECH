import axios from "axios"
import { useState } from "react"

export default function UpdateEmp(){
           let [employee,setEmployee]=useState({emp:null})
           let [username,setusername]=useState("")
           let [email,setEmail]=useState("")

    function handler(){
           let obj={name:username,email:email}
           let pro=axios.put("https://reqres.in/api/users/",obj)
           pro.then((res)=>{
                setEmployee({emp:res})
           })
    }
    return(
        <div>
            <label>Enter Name</label>
            <input type="text" placeholder="Enter name" onBlur={((e)=>{setusername(e.target.value)})} ></input>
            <label>Enter Email</label>
            <input type="text" placeholder="Enter Email" onBlur={((e)=>{setEmail(e.target.value)})} ></input>
            <button onClick={handler}>Upadte Employee</button>
            <p>{employee.emp==null ?" Not added Emp ":JSON.stringify(employee)}</p>
        </div>
    )
}