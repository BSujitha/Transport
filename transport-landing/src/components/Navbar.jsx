import React, { useState, useEffect } from "react";
import "../components-css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll to sections
  const scrollToSection = (sectionId) => {
    setMenuOpen(false); // Close mobile menu
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 70;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  // Scroll listener for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={() => scrollToSection("hero")}>
        ABC Transport
      </div>
      
      {/* Desktop Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><span onClick={() => scrollToSection("hero")}>Home</span></li>
        <li><span onClick={() => scrollToSection("about")}>About</span></li>
        <li><span onClick={() => scrollToSection("book-lorry")}>Book Lorry</span></li>
        <li><span onClick={() => scrollToSection("contact")}>Contact</span></li>
      </ul>

      {/* Hamburger Button */}
      <button 
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
