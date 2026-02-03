import React from "react";
import '../components-css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p><a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a></p>
      <p>Follow us on 
        <a href="https://www.facebook.com" target="_blank"> Facebook</a>, 
        <a href="https://www.instagram.com" target="_blank"> Instagram</a>, 
        <a href="https://www.linkedin.com" target="_blank"> LinkedIn</a>
      </p>
    </footer>
  );
}

export default Footer;
