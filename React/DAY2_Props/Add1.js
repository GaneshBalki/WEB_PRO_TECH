import React from 'react';


export default class Add1 extends React.Component{
  
    constructor(props){
        super(props)
        this.a=props.num1
        this.b=props.num2
    }
    calc(){
        let sum = this.a + this.b
        return sum
    }
    render(){
        return <div>
            The sum of {this.a} + {this.b} = {this.calc()}
            
        </div>
    }
}
