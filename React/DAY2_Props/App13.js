import Add from './Add.js'
import Add1 from './Add1.js'
import Factorial  from './Factorial.js'
import Factorial1  from './Factorial1.js'
import Factorial2  from './Factorial2.js'
import StateIndia from './State.js'
export default function App13()
{
    return( <div>
           <Add num1={25} num2={45}></Add>
           <Factorial num={5}></Factorial>
           <Add1 num1={25} num2={45}></Add1>
           <Factorial1 num={7}></Factorial1>
           <Factorial2></Factorial2>
           <StateIndia ></StateIndia>
           </div>
           )
}       