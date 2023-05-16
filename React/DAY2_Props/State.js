import { Component } from 'react';

export default class StateIndia extends Component{
       constructor(){
        super()
        this.ss=""
        this.handler1 = this.handler1.bind(this)
       }
       handler1(e)
       {
           this.ss=e.target.value 
           console.log(this.ss)
           switch (this.ss) {
            case "MH":
                document.getElementById("p2").innerText="Mumbai"
                break;
            case "AP":
                document.getElementById("p2").innerText="Hydrabad"
                break;
            case "UK":
                document.getElementById("p2").innerText="Dehradoon"
                break;
            case "UP":
                document.getElementById("p2").innerText="Lucknow"
                break;
            case "select":
                document.getElementById("p2").innerText=""
                break;
            case "BR":
                document.getElementById("p2").innerText="Patna"
                break;
            case "MP":
                document.getElementById("p2").innerText="Bhopal"
                break;
            case "RJ":
                document.getElementById("p2").innerText="Jaipur"
                break;
            default:
                break;
           }

       }
   render ()
   {
    return(
        <div>
             
            <div>
                <label>Select State</label><br></br>
            <select onChange={this.handler1}>
                <option value="select">Select</option>
                <option value="MH">Maharashtra</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="UK">Uttarakhand</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="BR">Bihar</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="RJ">Rajasthan</option>

            </select>
            </div>
       
            <div>
            <p id="p2"></p>
            </div>
        </div>
    )
   }
}
