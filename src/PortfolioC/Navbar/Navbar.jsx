import React from 'react';
import "./Navbar.css";
const Navbar =()=> {
    return (
        <>
        <div className="nav">

           <div className="container">
               <div className="logo">
                SR 
               </div>
               <div className="navbar">
               <ul className='nav_list'>
  <li><a href=" "  className='effect01  span' >Home</a></li>
  <li><a href="#about " className='effect01  span ' >
      <span>
      About
      </span>
      </a></li>
  <li><a href="#projects "  className='effect01 span' >Projects</a></li>
  <li><a href=" "  className='effect01 span ' >Contact</a></li>
</ul>
        </div>
               </div>
               </div>  
        </>
    )
}

export default Navbar;
