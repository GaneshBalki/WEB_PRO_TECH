import { Component } from "react";

export default class Factorial1 extends Component{

    constructor(props){
        super(props)
       this.x=props.num
    }
    calc(){
        let fact=1
          for(var i=1;i<=this.x;i++)
          {
            fact=fact*i
          }
          return fact
    }
    render(){
        return(
        <div>
            the Factorial of {this.x} is {this.calc()}
        </div>)
    }
}