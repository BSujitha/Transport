import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import "../components-css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
 

  // Smooth scroll to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      // Section exists → scroll smoothly
      const navbarHeight = 70;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: "smooth" });
      setMenuOpen(false);
    } else {
      // Section doesn't exist → go to home first
      navigate("/", { replace: false });
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          const navbarHeight = 70;
          const sectionTop = target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: sectionTop - navbarHeight, behavior: "smooth" });
          setMenuOpen(false);
        }
      }, 100); // small delay to allow DOM to render
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
         YoYo Transport
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><span onClick={() => scrollToSection("hero")}>Home</span></li>
        <li><span onClick={() => scrollToSection("about")}>About</span></li>
        <li><span onClick={() => scrollToSection("book-lorry")}>Book Lorry</span></li>
        <li><span onClick={() => scrollToSection("contact")}>Contact</span></li>
      </ul>

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
