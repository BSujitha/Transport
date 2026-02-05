import React, { useState, useRef, useEffect } from "react";
import smallLorry from "../assets/small-lorry.jpg";
import mediumLorry from "../assets/medium-lorry.jpg";
import largeLorry from "../assets/large-lorry.jpg";
import "../components-css/BookLorry.css";

function BookLorry() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", purpose: "", lorry: ""
  });
  const [errors, setErrors] = useState({});
  const lorryRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  useEffect(() => {
    const cards = lorryRef.current?.querySelectorAll('.lorry-card');
    cards?.forEach((card, index) => {
      card.onclick = () => {
        const types = ['small', 'medium', 'large'];
        setFormData(prev => ({...prev, lorry: types[index]}));
        card.style.transform = 'scale(0.97)';
        setTimeout(() => { card.style.transform = ''; }, 200);
      };
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = "10-digit phone required";
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose required";
    if (!formData.lorry) newErrors.lorry = "Select lorry type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      console.log("🚚 BOOKING DATA:", formData);
      setTimeout(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", purpose: "", lorry: "" });
        setLoading(false);
        setTimeout(() => setSuccess(false), 4000);
      }, 1500);
    }
  };

  return (
    <section className="book-lorry-section" id="book-lorry">
      <div className="book-lorry-container">
        <div className="book-hero">
          <h1>Book Your Lorry Now</h1>
          <p>Available fleet during hostel delivery off-hours</p>
        </div>

        <div className="lorry-types" ref={lorryRef}>
          <div className="lorry-card">
            <img src={smallLorry} alt="Small Lorry" className="lorry-image" />
            <h3>Small Lorry</h3>
            <div className="card-text">
              <p>Up to 1 ton capacity</p>
              <p>Perfect for small loads</p>
            </div>
          </div>

          <div className="lorry-card">
            <img src={mediumLorry} alt="Medium Lorry" className="lorry-image" />
            <h3>Medium Lorry</h3>
            <div className="card-text">
              <p>Up to 3 tons capacity</p>
              <p>Ideal for medium loads</p>
            </div>
          </div>

          <div className="lorry-card">
            <img src={largeLorry} alt="Large Lorry" className="lorry-image" />
            <h3>Large Lorry</h3>
            <div className="card-text">
              <p>Up to 7 tons capacity</p>
              <p>Heavy duty bulk goods</p>
            </div>
          </div>
        </div>

        <div className="booking-form-section">
          <div className="booking-form-card">
            <h2>Complete Your Booking</h2>
            
            {success && (
              <div className="success-message">
                ✅ Booking confirmed! Contacting you in 30 mins.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name *" 
                  value={formData.name} onChange={handleChange} 
                  className={errors.name ? "error" : ""} />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email *" 
                    value={formData.email} onChange={handleChange} 
                    className={errors.email ? "error" : ""} />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone *" 
                    value={formData.phone} onChange={handleChange} 
                    className={errors.phone ? "error" : ""} maxLength="10" />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <input type="text" name="purpose" placeholder="Purpose * (furniture, materials)" 
                  value={formData.purpose} onChange={handleChange} 
                  className={errors.purpose ? "error" : ""} />
                {errors.purpose && <span className="error-text">{errors.purpose}</span>}
              </div>

              <div className="form-group">
                <select name="lorry" value={formData.lorry} onChange={handleChange} 
                  className={errors.lorry ? "error" : ""}>
                  <option value="">Select Lorry Type *</option>
                  <option value="small">Small Lorry</option>
                  <option value="medium">Medium Lorry</option>
                  <option value="large">Large Lorry</option>
                </select>
                {errors.lorry && <span className="error-text">{errors.lorry}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={success || loading}>
                {loading ? "🚚 Booking..." : success ? "✅ Confirmed!" : "Book Now →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookLorry;
