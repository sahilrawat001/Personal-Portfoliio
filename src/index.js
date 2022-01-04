import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './PortfolioC/Aboutme/About';
import Links from './PortfolioC/Fixedlinks/Links';
 import Intro from './PortfolioC/Intro/Intro';
import Navbar from './PortfolioC/Navbar/Navbar';
import Project from './PortfolioC/Project/Project';
  
ReactDOM.render(
  <React.StrictMode>
     <Navbar/>
     <Links/>
     <Intro/>
     <About/>
     <Project/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 