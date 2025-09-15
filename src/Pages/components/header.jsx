
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import "../../css/components/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="header">
      {/* Logo / Brand */}
      <div className="logo">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>THINESHKARAN</NavLink>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-desktop-nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink>
       
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
    
      </nav>

      {/* Mobile Hamburger */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
    
        <NavLink to="/" end onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
        <NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink>
       
        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
        <button className="btn_get_started" onClick={() => { toggleMenu(); navigate('/contact'); }}>
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default Header;
