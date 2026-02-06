import React from "react";
import "../components-css/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Ready to book? We're local and available 24/7</p>
        </div>

        
        <div className="contact-cards">
          
          <div className="contact-card location-card">
            <div className="card-icon">📍</div>
            <div className="card-content">
              <h3>Our Location</h3>
              <p>207/13,14 Vengalur Vilathoor Joint Road<br/>Paramakudi, Ramanathapuram, Tamil Nadu - 623 608</p>
            </div>
          </div>

          
          <div className="contact-card phone-card">
            <div className="card-icon">📞</div>
            <div className="card-content">
              <h3>+91 98765 43210</h3>
              <p>24/7 Booking Support</p>
              <a href="tel:+919876543210" className="card-link">Call Now</a>
            </div>
          </div>

          
          <div className="contact-card email-card">
            <div className="card-icon">✉️</div>
            <div className="card-content">
              <h3>book@yoyo-transport.in</h3>
              <p>Response within 2 hours</p>
              <a href="mailto:book@abc-transport.in" className="card-link">Send Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
