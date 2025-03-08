import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-content">
        {activeTab === 'description' ? (
          <div className="descriptionbox-description">
            <p>
              Laura Online brings the latest trends right to your fingertips! Dive into a world of style with our curated collection of clothing, 
              designed to elevate your wardrobe and inspire confidence. From chic essentials to statement pieces, we've got you covered for every occasion.
            </p>
            <p>
              With easy navigation and secure checkout, your next fashion find is just a click away. Join the fashion revolution today and experience the 
              convenience of online shopping with Laura!
            </p>
          </div>
        ) : (
          <div className="descriptionbox-reviews">
            <h3>Customer Reviews</h3>
            <p>⭐️⭐️⭐️⭐️⭐️ "Absolutely love the quality and design!" - Sarah</p>
            <p>⭐️⭐️⭐️⭐️ "Great customer service and fast delivery." - John</p>
            <p>⭐️⭐️⭐️⭐️⭐️ "Perfect fit and stylish!" - Emily</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
