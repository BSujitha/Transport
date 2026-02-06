import React, { useState, useEffect } from "react";
import about1 from "../assets/lorry3.jpg";
import about2 from "../assets/lorry2.jpg";
import about3 from "../assets/lorry.jpg";
import about4 from "../assets/lorry4.jpg";
import about5 from "../assets/lorry5.jpg";
import lorry1 from "../assets/lorryyy.jpg";

import "../components-css/About.css";

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [about1, about2, about3, about4, about5];

  // Auto loop every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="about" id="about" aria-labelledby="about-title">

      {/* ABOUT + CAROUSEL */}
      <div className="about-container">

        <div className="about-content">
          <h2 className="about-title" id="about-title">
            About YoYo Transport
          </h2>

          <p className="about-text">
            YoYo Transport delivers <strong>wholesale groceries to hostels</strong> across Bangalore.
            After our scheduled hostel deliveries, our lorries have{" "}
            <strong>extra time</strong> and that's YOUR opportunity!
            Book our lorries for personal use during these{" "}
            <strong>available time slots</strong> at affordable rates.
          </p>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Hostel Partners</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Extra Bookings / Month</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available Slots</div>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE CAROUSEL */}
        <div className="about-image">
          <div className="image-carousel">

            <button className="carousel-btn left" onClick={goToPrevious}>
              &#10094;
            </button>

            <div className="carousel-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`ABC Transport lorry ${index + 1}`}
                  className={`carousel-image ${
                    index === currentImage ? "active" : ""
                  }`}
                />
              ))}
            </div>

            <button className="carousel-btn right" onClick={goToNext}>
              &#10095;
            </button>

            <div className="carousel-dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImage ? "active" : ""}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="why-choose-wrapper">
        <div className="why-choose-container">

          <div className="whychoose-image">
            <img
              src={lorry1}
              alt="Why Choose ABC Transport"
              className="whychoose-single-image"
            />
          </div>

          <div className="why-choose">
            <h3 className="why-title">Why Choose Us</h3>
            <p className="why-text">
              We make transport smarter by utilizing lorry availability efficiently.
              Our service offers <strong>affordable pricing</strong> by using unused time slots,
              ensuring cost savings for customers. With <strong>experienced drivers</strong>,
              well-maintained vehicles, and a trusted delivery network, we guarantee
              reliable and safe transportation. Our <strong>flexible booking options</strong>
              and 24/7 availability make it easy to schedule transport whenever you need it.
            </p>
          </div>

        </div>
      </div>

      {/* 🤝 PARTNERSHIP SECTION (TEXT ONLY — SAFE) */}
      <div className="partnership-wrapper">
        <div className="partnership-container">
          <h3 className="partnership-title">Our Partnerships</h3>

          <p className="partnership-text">
            YoYo Transport proudly collaborates with <strong>two trusted partners</strong>
            who support our logistics and delivery operations. These partnerships
            help us maintain service quality, expand availability, and ensure
            smooth coordination across all transport activities.
          </p>

          <ul className="partnership-list">
            <li>✔ Partner 1 – Supporting regional logistics operations</li>
            <li>✔ Partner 2 – Assisting in fleet management & scheduling</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default About;
