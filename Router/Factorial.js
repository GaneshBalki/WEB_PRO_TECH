import { Component } from "react";

export default class Factorial extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let fact=1;
    for(let i=1;i<=this.props.num;i++){
        fact = fact *i;
    }


    return(
        <div>
            <h3>Factorial of {this.props.num} is {fact}</h3>
        </div>
    )
  }
}