import React from 'react';
import "./About.css";
import  Sahil from "../images/sahil3.jpg"

const About=()=> {
    return ( 
        <>
        <div id='about'>

        <h1 className='heading bg-effect'>
            ABOUT ME
        </h1>
        </div>
        <div className='a bg-effect'>
 
        <div className="left">
           
        <img src= {Sahil} alt='sahil-pic' className="image"/>

        </div>
        <div className="right">
            <p>
           <h3>Hi,I am Sahil Rawat</h3>
An Web developer.
 I'm currently pursuing an undergraduate in Computer Science.
  During my studies, I have been acquiring work experience in various fields and lately,
   I have been concentrating on software development on the Web Development platform. 
  I'm learning React as a frontend ,mongoDB, nodejs for backend, Docker etc. For deployment i mostly used vercel or netlify.
  Apart from the domain study I also loves to explore the history of the ancient and modern India. I likes to watch south indian movies.

           </p>
        </div>
         </div>
         </>
    )
}
export default  About;
