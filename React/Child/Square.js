import { Component } from "react";
export default class Square extends Component
{
   constructor(){
    super()
    this.num=0
    this.state={sqr:0}
   }

handler=(e)=>
{
    this.num = e.target.value
    let s = this.num * this.num
    this.setState({sqr:s})
}


    render(){
        return(
            <div>
                <input type="number" placeholder="Enter a number" onBlur={this.handler}></input>
                <p>square of {this.num} is {this.state.sqr}</p>
            </div>
        )
    }
}