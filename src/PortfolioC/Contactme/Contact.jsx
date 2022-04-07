import { useState } from "react";
import pic from"../img/phone.png";
import "./Contact.css";

const   Contact=()=> {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="con">
    <h2 className="head">Contact.</h2>
    <div className="contact" id="contact">

      <div className="left">
        <img src={pic} alt="pic here" className="image_contact"  />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>

          <input type="text" placeholder="Full Name"/>
          <input type="number" placeholder="Contact number"/>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
    </div>
  )
  }
export default Contact;