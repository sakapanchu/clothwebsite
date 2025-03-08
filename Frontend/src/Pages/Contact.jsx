import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? We're here to help! Reach out to us via the contact form below, 
        and we'll get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;