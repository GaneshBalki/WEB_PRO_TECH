import { Component } from "react";

export default class Fact1 extends Component{

constructor()
{

    super()
    this.num=0
    this.state={fact:1}
}
handler1=(e)=>
{
    this.num=e.target.value
    let mult=1
    for(var i=1;i<=this.num;i++)
    {
        mult=mult*i
    }
    this.setState({fact:mult})
}


    render(){
        return(
            <div>
                <input type="number" onBlur={this.handler1}></input>
                <p>Factorial of {this.num} is {this.state.fact}</p>

            </div>
        )
    }
}