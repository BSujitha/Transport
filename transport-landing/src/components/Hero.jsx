import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/lorryimg.jpg";
import "../components-css/Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Book Our Lorry for Your Transport Needs</h1>
          <p>Fast • Reliable • Affordable</p>
          <button onClick={() => navigate("/book-lorry")}>
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
