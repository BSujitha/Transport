import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components-css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">ABC Transport</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <a href="#features" onClick={handleLinkClick}>Features</a>
        <Link to="/book-lorry" onClick={handleLinkClick}>Book Lorry</Link>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
