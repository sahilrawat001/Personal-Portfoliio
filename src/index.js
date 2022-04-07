import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './PortfolioC/Aboutme/About';
import Contact from './PortfolioC/Contactme/Contact';
import Links from './PortfolioC/Fixedlinks/Links';
import Footer from './PortfolioC/Footer/Footer';
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
     <Contact/>
     <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 