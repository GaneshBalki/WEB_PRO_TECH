
import { useState } from 'react';
import './App.css';
import Factorial from './Factorial';
import './Layout.css'
import { Outlet, Link } from "react-router-dom";
function App() {
  var [num,setNum]=useState(0)
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home></Home>}/>
        <Route path='blogs' element={<Blogs></Blogs>}/>
        <Route path='about' element={<About></About>}/>
       
      </Routes>
      </BrowserRouter> */}
       <nav>
            <Link to="/" className="hi"> App </Link>
            <Link to="*" className="hi"> Home </Link>
         
            <Link to="/blogs" className="hi"> Blogs </Link>
         
            <Link to="/contact" className="hi"> Contact </Link>
          
      </nav>

      <Outlet />
      <input type='number' onBlur={((e)=>{setNum(e.target.value)})}></input>
      <Factorial num={num}></Factorial>
    </div>
 
  );
}

export default App;
