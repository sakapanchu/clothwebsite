import React from 'react';
import './CSS/Terms.css';
import { FaFileContract, FaCreditCard, FaUndo, FaCopyright } from 'react-icons/fa';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-content">
        <h1>Terms & Conditions <FaFileContract className="terms-icon" /></h1>
        <p>
          Welcome to Laura! By using our website, you agree to comply with and be bound by the following terms 
          and conditions.
        </p>

        <div className="terms-section">
          <h2><FaCreditCard className="section-icon" /> Orders and Payments</h2>
          <p>
            All orders are subject to availability and confirmation of the order price. We accept payments via 
            credit/debit cards and other secure payment methods.
          </p>
        </div>

        <div className="terms-section">
          <h2><FaUndo className="section-icon" /> Returns and Refunds</h2>
          <p>
            If you are not satisfied with your purchase, you may return it within 30 days for a full refund. 
            Please refer to our Returns Policy for more details.
          </p>
        </div>

        <div className="terms-section">
          <h2><FaCopyright className="section-icon" /> Intellectual Property</h2>
          <p>
            All content on this website, including images, text, and logos, is the property of Laura and is 
            protected by copyright laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;