import React,{ Component } from "react";


export default class Table extends Component{
  
    constructor(props){
        super(props)
        
        this.state={facto:1,n1:props.num}
        
    }
    
   f1(){
     
      let fact=1
      for(let i=1;i<=this.state.n1;i++){
         fact=fact*i
      }

      this.setState({facto:fact})
    }
    render(){
        return(
            <div>
               <button onClick={this.f1}>Cal</button>
                is is {this.state.facto}
            </div>
        )
    }
}
