
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Factorial1 from './Factorial1'
import Add1 from './Add1'
import Login from './login'
export default function App20()
{

    return (
       <div>
       <Routes>
           <Route path="/" element={<Home></Home>}>  
             <Route path="/Factorial1" element={<Factorial1></Factorial1>}></Route>
             <Route path="/Add1" element={<Add1></Add1>}></Route>
             <Route path="/Login" element={<Login></Login>}></Route>
             {/* <Route path="/Form"></Route>
             <Route path="/Hello"></Route>
             <Route path="/Grr"></Route> */}
          </Route>
       </Routes>
       </div>
          )}