import React from "react";
import "../components-css/Hero.css";
import lorryImage from "../assets/lorryimg.jpg";

function Hero() {
  const scrollToBookLorry = () => {
    document.getElementById("book-lorry")?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  };

  return (
    <section className="hero" role="banner">
       <div 
        className="hero-background" 
        style={{ 
          backgroundImage: `url(${lorryImage})`  // ← YOUR IMAGE HERE
        }}
        role="img"
        aria-label="Lorry transport service"
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Book Our Lorry for Your Transport Needs</h1>
          <p>Fast • Reliable • Affordable</p>
          <button onClick={scrollToBookLorry}>Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
