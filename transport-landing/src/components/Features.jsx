import React from "react";
import '../components-css/Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2>Why Choose Our Lorry Service?</h2>
      <div className="features-cards">
        <div className="feature-card">
          <h3>Easy Online Booking</h3>
          <p>Book your lorry in just a few clicks without any hassle.</p>
        </div>
        <div className="feature-card">
          <h3>Safe & Reliable</h3>
          <p>All our lorries are well-maintained and driven by experienced drivers.</p>
        </div>
        <div className="feature-card">
          <h3>Flexible Scheduling</h3>
          <p>Book lorries for multiple purposes and at your preferred time.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
