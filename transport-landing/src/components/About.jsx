import React from "react";
import aboutImage from "../assets/lorry3.jpg"; // About section image
import whyImage from "../assets/lorryyy.jpg";      // Why Choose Us image
import partnerImage from "../assets/lorry5.jpg"; // Partnership image

import "../components-css/About.css";

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      
      {/* ABOUT YOYO TRANSPORT */}
      <div className="about-container single-about">
        <div className="about-content">
          <h2 className="about-title" id="about-title">About YoYo Transport</h2>
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

        <div className="about-image single-image">
          <img src={aboutImage} alt="YoYo Transport Lorry" />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="why-choose-wrapper">
        <div className="why-choose-container flipped">
          <div className="whychoose-image">
            <img src={whyImage} alt="Why Choose Us" />
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

      {/* PARTNERSHIP SECTION */}
      <div className="partnership-wrapper light-bg">
        <div className="partnership-container">
          <div className="partnership-content">
            <h3 className="partnership-title">Our Partnerships</h3>
            <p className="partnership-text">
              YoYo Transport proudly collaborates with trusted partners who play a key role in supporting our logistics, delivery, and fleet operations. 
              These strategic partnerships enable us to maintain consistent service quality, optimize scheduling and fleet management, expand operational reach, 
              and ensure seamless coordination across all transportation activities, helping us deliver reliable and efficient solutions to our customers.
            </p>
          </div>
          <div className="partnership-image">
            <img src={partnerImage} alt="Partnership" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
