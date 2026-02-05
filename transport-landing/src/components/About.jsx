import React, { useState, useEffect } from "react";
import about1 from "../assets/lorry3.jpg";
import about2 from "../assets/lorry2.jpg";
import about3 from "../assets/lorry.jpg";
import about4 from "../assets/lorry4.jpg";
import about5 from "../assets/lorry5.jpg";
import "../components-css/About.css";

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [about1, about2, about3, about4, about5];

  // Auto loop every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentImage((prev) => prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-container">
        {/* LEFT: Text + Stats */}
        <div className="about-content">
          <h2 className="about-title" id="about-title">About ABC Transport</h2>
          <p className="about-text">
            ABC Transport delivers <strong>wholesale groceries to hostels</strong> across Bangalore. 
            After our scheduled hostel deliveries, our lorries have <strong>extra time</strong> - 
            and that's YOUR opportunity! Book our lorries for personal use during these 
            <strong>available time slots</strong> at affordable rates.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Hostel Partners</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Extra Bookings/Month</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available Slots</div>
            </div>
          </div>
        </div>

        {/* RIGHT: 5-IMAGE CAROUSEL */}
        <div className="about-image">
          <div className="image-carousel">
            <button className="carousel-btn left" onClick={goToPrevious}>‹</button>
            
            <div className="carousel-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`ABC Transport lorry ${index + 1}`}
                  className={`carousel-image ${index === currentImage ? 'active' : ''}`}
                />
              ))}
            </div>
            
            <button className="carousel-btn right" onClick={goToNext}>›</button>
            
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
