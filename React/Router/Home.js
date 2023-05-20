
import { Link, Outlet } from "react-router-dom"
export default function Home()
{
    return(
        <div>This is Home page
        
        <p><Link to="./Home.js">Home </Link></p>  
        <p><Link to="/Factorial1">Factorial</Link></p>
        <p><Link to="/Add1">Add</Link></p>
        <p><Link to="/Login">LOGIN </Link></p>
       
        <Outlet></Outlet>
        </div>)
}