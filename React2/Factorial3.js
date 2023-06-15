import { Component } from "react";

export default class Factorial3 extends Component{

    constructor(props){
        super(props)
    }
    render(){
        let fact=1;
        for(let i=1;i<=this.props.num;i++){
            fact = fact *i
        }
        return(
            <div>
                Factorial of {this.props.num} is {fact}
            </div>
        )
    }
}