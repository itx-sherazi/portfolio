import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">Alishba Akram</a>
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="hamburger-menu" onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;