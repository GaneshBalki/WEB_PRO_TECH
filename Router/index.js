import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Blogs from './Blogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
//import Layout from '../public/Layout';
import NoPage from './NoPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Browser   Router>
  //  <App />
  //  </BrowserRouter>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route path='/' element={<App></App>}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
