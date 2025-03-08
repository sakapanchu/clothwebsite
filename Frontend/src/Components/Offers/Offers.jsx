import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Offers.css';
import exclucive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  // Use the `useInView` hook to detect when the component is in the viewport
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Trigger when 50% of the element is visible
  });

  return (
    <div className='offers' ref={ref}>
      <div className="offers-left">
        <h1 className={inView ? 'fadeInLeft' : ''}>Exclusive</h1>
        <h1 className={inView ? 'fadeInLeft' : ''}>Offers For You</h1>
        <p className={inView ? 'fadeInLeft' : ''}>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className={inView ? 'fadeInUp' : ''}>Check Now</button>
      </div>
      <div className="offers-right">
        <img
          src={exclucive_image}
          alt="Exclusive Offer"
          className={`offer-image ${inView ? 'fadeInRight' : ''}`}
        />
      </div>
    </div>
  );
};

export default Offers;