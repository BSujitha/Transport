import React from "react";
import "../components-css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="footer-logo">ABC Transport</div>
          <p>Fast • Reliable • Affordable</p>
          <div className="brand-address">
            📍 207/13,14 Vengalur Vilathoor Joint Road<br/>
            Paramakudi, Ramanathapuram<br/>
            Tamil Nadu - 623 608
          </div>
          <div className="brand-contact">
            <span>📞 +91 98765 43210</span>
            <span>✉️ book@abc-transport.in</span>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#book-lorry">Book Lorry</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-booking">
          <h3>Booking</h3>
          <ul>
            <li>24/7 Available</li>
            <li>Small/Medium/Large Lorries</li>
            <li>Starting ₹15/km</li>
            <li>Instant Confirmation</li>
          </ul>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; 2026 ABC Transport. All rights reserved. | Serving Tamil Nadu</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="tel:+919876543210">Emergency</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
