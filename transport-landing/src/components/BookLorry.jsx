import React from "react";
import '../components-css/BookLorry.css';

function BookLorry() {
  return (
    <div className="book-lorry-page">
      {/* Hero Banner */}
      <div className="book-hero">
        <h1>Book Your Lorry</h1>
        <p>Flexible, reliable transport for hostels, businesses, and individuals</p>
      </div>

      {/* Booking Options Cards */}
      <div className="booking-cards">
        <div className="card">
          <img src="image" alt="Small Lorry"/>
          <h3>Small Lorry</h3>
          <p>Perfect for light transport and small deliveries.</p>
        </div>
        <div className="card">
          <img src="image" alt="Medium Lorry"/>
          <h3>Medium Lorry</h3>
          <p>Ideal for medium-scale deliveries.</p>
        </div>
        <div className="card">
          <img src="image" alt="Large Lorry"/>
          <h3>Large Lorry</h3>
          <p>For bulk transport and large orders.</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="booking-form-card">
        <h2>Book Your Lorry Now</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Purpose / Details" required />
          <select>
            <option>Select Lorry Type</option>
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
