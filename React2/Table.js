import { Component } from "react";


export default class Table extends Component{
  
    constructor(props){
        super()
        this.n1=props.num
        this.setState={num:1}
       
    }
    
   table(){
      let fact=1
      for(let i=1;i<=this.n1;i++){
         fact=fact*i
      }
      this.setState({num:fact})
    }
    render(){
        return(
            <div>
                <button onClick={this.table}>CLick</button>
                is is {this.state.num}
            </div>
        )
    }



    
}