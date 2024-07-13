import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import { Home } from './Home';
import { Contact } from './Contact';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Project } from './Project';
import { About } from './About';
import { Resume } from './Resume';
import { SocialMedia } from './SocialMedia';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    
    switch (location.pathname) {
      case '/':
        document.title = 'C . Siva - Home';
        break;
      case '/Resume':
        document.title = 'C . Siva - Resume';
        break;
      case '/Project':
        document.title = 'C . Siva - Project';
        break;
      case '/About':
        document.title = 'C . Siva - About';
        break;
      case '/Contact':
        document.title = 'C . Siva - Contact';
        break;
      default:
        document.title = 'C . Siva - Portfolio';
    }
  }, [location.pathname]);

  return (
    <div className={` ${isDarkMode ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="main bg-white dark:bg-black text-black dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Project" element={<Project />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </main>
      <SocialMedia />
    </div>
  );
}

export default App;
