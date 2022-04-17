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
 
const dataForBackPacking = [
  {url:"https://www.wanderon.in/triplist/bir-billing/wanderon-bir-1.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-lahaul/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/tirthan-valley/wanderon-tirthan-1.jpg"},
  {url:"https://www.wanderon.in/triplist/chopta-tungnath/wanderon-chopta-1.jpg"},
  {url:"https://www.wanderon.in/triplist/mcleodganj-bir-billing/wanderon-bir-1.jpg"},
]


ReactDOM.render(
  <React.StrictMode>
     <Navbar/>
     <Links/>
     <Intro/>
     <About/>
     <Project title="Explore WanderOn" datas = {dataForBackPacking} />

     <Contact/>
     <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 