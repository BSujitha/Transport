import React from "react";
import heroImg from "../assets/lorry.jpg";
import "../components-css/Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImg})`
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Book Our Lorry for Your Transport Needs</h1>
          <p>Fast • Reliable • Affordable</p>
          <button>Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
