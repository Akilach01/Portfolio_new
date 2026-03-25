import { useState } from "react";
import "./styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <img src="../assets/images/logo AK.jpg" alt="logo" />

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={handleNavClick}>Home</a></li>
        <li><a href="#work" onClick={handleNavClick}>Work</a></li>
        <li><a href="#about" onClick={handleNavClick}>About</a></li>
        <li><a href="#gallery" onClick={handleNavClick}>Gallery</a></li>
        <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
      </ul>

      <button 
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </button>
    </nav>
  );
}

export default Navbar;
