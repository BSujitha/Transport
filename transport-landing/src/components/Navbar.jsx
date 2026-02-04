import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components-css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goToSection = (id) => {
    setMenuOpen(false);
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="logo">ABC Transport</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <span onClick={() => { navigate("/"); setMenuOpen(false); }}>Home</span>
        <span onClick={() => goToSection("features")}>Features</span>
        <span onClick={() => navigate("/book-lorry")}>Book Lorry</span>
        <span onClick={() => goToSection("contact")}>Contact</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
