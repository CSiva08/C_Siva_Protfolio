import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa6";
export const Contact = () => {
  const Navigate=useNavigate();
  return (
    <div className='contact_grid'>
        <div className='contact_header'>
            <h1>Contact</h1>
                <div className='contact_navigate'><p onClick={()=>Navigate('/')}>Home</p> || <p>Contact</p></div>
        </div>
        <div className="contact_section">
        <div className='vertical_line'></div>
            <div className='contact_info_flex'>
            
              <div className='contact_info'>
                <FaPhoneAlt className='contact_icon'/>
                <h4>Phone</h4>
                <p>+916302287578</p>
              </div>
              <div className='contact_info'>
                <MdMail className='contact_icon'/>
                <h4>Email</h4>
                <p>sivachandran8111@gmail.com</p>
              </div>
              <div className='contact_info'>
                <FaLocationDot className='contact_icon'/>
                <h4>Address</h4>
                <p>Chittoor, AP, India, 517132</p>
              </div>
              <div className='contact_info'>
                <FaUserClock className='contact_icon'/>
                <h4>Fresher</h4>
                <p>Available for hire</p>
              </div>
            </div>
            <div className='contact_form'>
              <form>
                <label>Name</label>
                  <input type='text' placeholder='Name'/>
                <label>Email</label>
                  <input type='email' placeholder='Email'/>
                <label>Message</label>
                  <input type="textarea" placeholder='Message'/>
                  <button type='submit'>Send Message</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;