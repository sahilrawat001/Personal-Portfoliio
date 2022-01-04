import React from 'react';
import './Links.css';
import { IconContext } from "react-icons";

import { FaGithubAlt,FaTwitter,FaWhatsappSquare  } from "react-icons/fa";
import {BsFacebook ,BsInstagram ,BsLinkedin} from "react-icons/bs"
import { FiMail}  from "react-icons/fi";
const  Links=()=> {
    return (
        <>
        <div className="icons">
            <IconContext.Provider value={ { size:"30px" ,color:"white"}  }>
            <ul className='iconsList'>
                <li className='list-item git'>
                <a href='https://github.com/sahilrawat001'   rel="noreferrer"  target="_blank" >

                <FaGithubAlt   /> 
                </a>
                </li>
                <li className='list-item'>
                <a href='https://www.facebook.com/sahilrawat001'   rel="noreferrer"  target="_blank" >

                   <BsFacebook/>
</a>
                </li>
                <li className='list-item'>
                <a href=' https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DXDwSWxDjMhklLpHlFHnfFgzrPgfjhCWBhcJvRkDsCjmHLCvgKrzHZwCWZwzgnCtzCkMtzDHcwFXTscZWZMrhNtNnvfsvJhTXNcsPnMSZhNXhGsCFmnTNTMg'   rel="noreferrer"  target="_blank" >

               <FiMail/>
</a>
                </li>
                
                <li className='list-item'>
                <a href=' https://www.instagram.com/sahilrawat_001/'   rel="noreferrer"  target="_blank" >

                    <BsInstagram/>
</a>
                </li>
                <li className='list-item'>
                <a href=' https://twitter.com/SahilRawat03'   rel="noreferrer"  target="_blank" >

                    <FaTwitter/>
</a>
                </li>
                <li className='list-item'>
                <a href=' https://www.linkedin.com/in/sahil-rawat-6387aa1aa/'   rel="noreferrer"  target="_blank" >

                    <BsLinkedin/>
</a>
                </li>
                <li className='list-item'>
                <a href=" https://api.whatsapp.com/send?phone=919517302066&text=Hello%20Sahil%20Rawat,%20%20I'm%20here%20from%20your%20portfolio"   rel="noreferrer"  target="_blank" >

                    <FaWhatsappSquare/>
</a>
                </li>
                
            </ul>
          {/* <FaGithub/> */}
          </IconContext.Provider>
          </div>
        </>
    )
}

export default Links
