import logo from './logo.svg';
import './App.css';
import './Greeting'
import Greeting from './Greeting';
import Factorial from './Factorial';
import Factorial2 from './Factorial2';
import { useState } from 'react';
import Table from './Table';
function App() {
  var [num,setNum]=useState(0);

  function getNum(event){
      setNum(event.target.value)
       
      console.log(num)
    
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <label>Enter a number</label>
      <input type='number' id='i1' onBlur={getNum}></input>
      <Greeting ></Greeting>
      {/* <Factorial num={5}></Factorial> */}
      {/* <Factorial2 num={num}></Factorial2> */}
      <Table num={num}></Table>

    </div>
  );
}

export default App;
