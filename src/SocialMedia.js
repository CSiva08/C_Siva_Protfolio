import React from 'react';
import './SocialMedia.css';
import Draggable from 'react-draggable';
import { FaLinkedinIn, FaGithub, FaGlobe } from 'react-icons/fa'; // Import icons
import { BsTwitter } from 'react-icons/bs'; // Import Twitter icon
import { FaWhatsapp } from "react-icons/fa";
export const SocialMedia = () => {
  

  return (
    <Draggable>
    <div className='social_flex'>
      {/* <p className='social_text'>Follow Me</p> */}
      <a href= "https://wa.me/916302287578?text=Hello" data-action="share/whatsapp/share" rel='noreferrer' target="_blank" className='social_icon'>
        <FaWhatsapp />
      </a>
      <a href="https://www.linkedin.com/in/siva-c-8b180a266/" rel='noreferrer' target="_blank" className='social_icon' >
        <FaLinkedinIn />
      </a>
      <a href="https://x.com/sivac08" rel='noreferrer' target="_blank" className='social_icon' >
        <BsTwitter />
      </a>
      <a href="https://github.com/CSiva08" rel='noreferrer' target="_blank" className='social_icon' >
        <FaGithub />
      </a>
      <a href="https://www.example.com/" rel='noreferrer' target="_blank" className='social_icon' >
        <FaGlobe />
      </a>
    </div>
    </Draggable>
  );
};

export default SocialMedia;
