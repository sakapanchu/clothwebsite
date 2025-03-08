import React from 'react';
import './CSS/Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to Laura! By using our website, you agree to comply with and be bound by the following terms 
        and conditions.
      </p>
      <h2>Orders and Payments</h2>
      <p>
        All orders are subject to availability and confirmation of the order price. We accept payments via 
        credit/debit cards and other secure payment methods.
      </p>
      <h2>Returns and Refunds</h2>
      <p>
        If you are not satisfied with your purchase, you may return it within 30 days for a full refund. 
        Please refer to our Returns Policy for more details.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including images, text, and logos, is the property of Laura and is 
        protected by copyright laws.
      </p>
    </div>
  );
};

export default Terms;