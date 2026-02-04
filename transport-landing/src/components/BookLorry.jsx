import React, { useState } from "react";
import "../components-css/BookLorry.css";
import smallLorry from "../assets/small-lorry.png";
import mediumLorry from "../assets/medium-lorry.png";
import largeLorry from "../assets/large-lorry.png";

function BookLorry() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    lorry: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      purpose: "",
      lorry: ""
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="book-lorry-page">
      {/* Hero */}
      <div className="book-hero">
        <h1>Book Your Lorry</h1>
        <p>Flexible, reliable transport for your needs</p>
      </div>

      {/* Cards */}
      <div className="booking-cards">
        <div className="card">
          <img src={smallLorry} alt="Small Lorry" />
          <h3>Small Lorry</h3>
          <p>Perfect for small deliveries.</p>
        </div>

        <div className="card">
          <img src={mediumLorry} alt="Medium Lorry" />
          <h3>Medium Lorry</h3>
          <p>Ideal for medium-sized transport.</p>
        </div>

        <div className="card">
          <img src={largeLorry} alt="Large Lorry" />
          <h3>Large Lorry</h3>
          <p>Best for heavy and bulk goods.</p>
        </div>
      </div>

      {/* Form */}
      <div className="booking-form-card">
        <h2>Book Your Lorry Now</h2>

        {success && (
          <div className="success-message">
            ✅ Booking Successful! We will contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name"
            value={formData.name} onChange={handleChange} required />

          <input type="email" name="email" placeholder="Email Address"
            value={formData.email} onChange={handleChange} required />

          <input type="tel" name="phone" placeholder="Mobile Number"
            value={formData.phone} onChange={handleChange}
            pattern="[0-9]{10}" required />

          <input type="text" name="purpose" placeholder="Purpose / Details"
            value={formData.purpose} onChange={handleChange} required />

          <select name="lorry" value={formData.lorry}
            onChange={handleChange} required>
            <option value="">Select Lorry Type</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookLorry;
