import "../components-css/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-cards">
        <div className="contact-card">
          <h3>Email</h3>
          <p>support@transport.com</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <h3>Location</h3>
          <p>Bangalore, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
