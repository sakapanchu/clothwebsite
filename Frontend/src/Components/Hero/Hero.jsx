import React from "react";
import "./Hero.css";
import { useInView } from "react-intersection-observer"; // Import useInView
import arrow_icon from "../Assets/arrow.png";
import home_img2 from "../Assets/home/home_img2.png";

const Hero = () => {
    // Use useInView to detect when the component is in view
    const { ref, inView } = useInView({
      triggerOnce: false, // Ensure the animation triggers every time
      threshold: 0.1, // Adjust this value to control when the animation triggers
    });

  return (
    <div className="hero" ref={ref}>
      {/* Creative Background Elements */}
      <div className="background-shapes">
        <div className="circle"></div>
        <div className="square"></div>
        <div className="triangle"></div>
      </div>

      <div className="hero-left">
        <div className="hero-content">
        <h2 className={inView ? "fadeInLeft" : ""}>"Fashion"</h2>
          <p className={inView ? "fadeInLeft" : ""}>
            Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, 
            fashion has to do with ideas, the way we live, what is happening.
          </p>
          <button className={`hero-latest-btn ${inView ? "fadeInUp" : ""}`}>
            Latest Collection
            <img src={arrow_icon} alt="arrow icon" />
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img
          src={home_img2}
          alt="Fashion Model"
          className={`hero-image ${inView ? "fadeInRight" : ""}`}
        />      
      </div>
    </div>
  );
};


export default Hero;
