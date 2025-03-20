import React from 'react';
import './CSS/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Laura</strong>, your one-stop destination for the latest in fashion and style. 
          We are dedicated to providing high-quality clothing that combines comfort, elegance, and affordability.
        </p>
        <p>
          Our mission is to empower individuals to express their unique style through our carefully curated collections. 
          Whether you're looking for casual wear, formal attire, or trendy accessories, we've got you covered.
        </p>
        <p>
          Thank you for choosing Laura. We look forward to being a part of your fashion journey!
        </p>
        <div className="about-highlights">
          <div className="highlight-card">
            <h3>Quality</h3>
            <p>We source the finest materials to ensure durability and comfort.</p>
          </div>
          <div className="highlight-card">
            <h3>Style</h3>
            <p>Our collections are designed to keep you ahead of the fashion curve.</p>
          </div>
          <div className="highlight-card">
            <h3>Affordability</h3>
            <p>High fashion doesn't have to come with a high price tag.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;