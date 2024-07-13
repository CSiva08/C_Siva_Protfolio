// Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS for styling

export const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        {/* Add more social icons as needed */}
      </div>
    </div>
  );
};

export default Footer;
