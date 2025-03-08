import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // For animations
import "./NewsLetter.css";
import { FaPaperPlane } from "react-icons/fa"; // For send icon
import { MdEmail } from "react-icons/md"; // For email icon

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time
    threshold: 0.1, // Adjust as needed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear input after submission
    }
  };

  return (
    <div ref={ref} className={`newsletter ${inView ? "fadeInUp" : ""}`}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <form onSubmit={handleSubmit}>
        <div className="newsletter-input">
          <MdEmail className="email-icon" />
          <input
            type="email"
            placeholder="Your Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            Subscribe <FaPaperPlane className="send-icon" />
          </button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default NewsLetter;
