// import React from 'react'
// import './App.css';
// import logo from './logo1.png';
// import {Link} from 'react-router-dom';
// import './Header.css';
// const Header = () => {

//   return (
//     <>
//     <div className='header' id='headersticky'>
//     <div className='logo-border'>
//       <img className='logo' src={logo} alt="" />
//     </div>
//     <span className="text-xs sm:text-xm lg:text-3xl xl:text-3xl font-bold"> <Link to="/">Home</Link></span>
//     <span className="text-xs sm:text-xm lg:text-3xl xl:text-3xl font-bold"> <Link to="/Resume">Resume</Link></span>
//     <span className="text-xs sm:text-xm lg:text-3xl xl:text-3xl font-bold"> <Link to="/Project">Projects</Link></span>
//     <span className="text-xs sm:text-xm lg:text-3xl xl:text-3xl font-bold"> <Link to="/About">About</Link></span>
//     <span className="text-xs sm:text-xm lg:text-3xl xl:text-3xl font-bold"> <Link to="/Contact">Contact</Link></span>
//     </div>

//     </>
    
    
//   )
// };

// export default Header




import React, { useState } from 'react';
import './App.css';
import logo from './logo1.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='header' id='headersticky'>
        <div className='logo-border'>
          <img className='logo' src={logo} alt="logo" />
          <h4>C.Siva</h4>
        </div>
        <div className='menu-button' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <span className='header_menu'>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </span>
          <span className="header_menu">
            <Link to="/Resume" onClick={toggleMenu}>Resume</Link>
          </span>
          <span className="header_menu">
            <Link to="/Project" onClick={toggleMenu}>Projects</Link>
          </span>
          <span className="header_menu">
            <Link to="/About" onClick={toggleMenu}>About</Link>
          </span>
          <span className="header_menu">
            <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
          </span>
        </nav>
      </div>
    </>
  );
};

export default Header;

