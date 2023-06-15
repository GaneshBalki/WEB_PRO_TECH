import { Component } from "react";


export default class Name extends Component{
    constructor(props){
        super(props)
       

    }
   
    render(){
        return(
            <div>
                name is {this.props.name}
            </div>
        )
    }
}