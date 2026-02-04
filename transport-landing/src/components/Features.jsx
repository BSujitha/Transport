import React from "react";
import "../components-css/Features.css";


function Features() {
  return (
    <section className="features" id="features">
      <h2 className="features-title">Why Choose Us</h2>

      <div className="features-container">
        <div className="feature-card">
          
          <h3>Multiple Lorry Options</h3>
          <p>Small, medium and large lorries for every need.</p>
        </div>

        <div className="feature-card">
          
          <h3>Fast Delivery</h3>
          <p>On-time pickup and delivery guaranteed.</p>
        </div>

        <div className="feature-card">
          
          <h3>Safe & Secure</h3>
          <p>Your goods are handled with care.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
