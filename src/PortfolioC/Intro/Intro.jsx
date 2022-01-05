import React from "react";
import './Intro.css';
import  Sahil from "../images/2sahil.png"

const Intro=()=>{
    return(
    <>
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">
                    Hello, My name is 
                </h2>
               <h1 className="i-name">
                   Sahil Rawat
               </h1>
               <div className="i-title">
                   <div className="i-title-wrapper">
                       <div className="i-title-item">  WEB DEVELOPER 1  </div>
                       <div className="i-title-item">  WEB DEVELOPER 2 </div>
                       <div className="i-title-item">  WEB DEVELOPER 3  </div>
                       <div className="i-title-item">  WEB DEVELOPER 4 </div>
                      {/* <div className="i-title-item">  WEB DEVELOPER 5 </div>  */}
                   </div>
               </div>
               <div className="i-desc">
                   I design and develop websites
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga repellendus incidunt libero quia impedit quaerat quasi a deleniti atque veritatis reprehenderit, 
                    doloremque similique cupiditate, laboriosam eveniet illo fugit laudantium non?
               </div>
               <div className="resume-button">
                       <a href="https://drive.google.com/drive/u/0/folders/1hI0bB4-3q0bXlIE7xwjlTEzZYeC0DYUF" >
                   <button>

                       Resume
                   </button>
                       </a>
               </div>
            </div>
             

        </div>
        <div className="i-right"> 
            <div className="i-bg">
              </div>
        <img src= {Sahil} alt='sahil-pic' className="i-image"/>

        </div>
    </div>
    
    </>
        )
}
export default Intro;
