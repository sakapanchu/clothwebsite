import React from 'react';
import './CSS/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <h1>Privacy Policy</h1>
      <p>
        At Laura, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, 
        use, and safeguard your personal information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, and payment details when you 
        make a purchase or create an account.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        Your information is used to process orders, improve our services, and communicate with you about 
        promotions and updates.
      </p>
      <h2>Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data from unauthorized access or 
        disclosure.
      </p>
    </div>
  );
};

export default PrivacyPolicy;