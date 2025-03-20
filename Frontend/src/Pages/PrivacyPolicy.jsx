import React, { useState } from 'react';
import './CSS/PrivacyPolicy.css';
import { FaLock, FaUser, FaShieldAlt, FaChevronDown, FaInfoCircle, FaEnvelope, FaTrash } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(section); // Open the clicked section
    }
  };

  return (
    <div className="privacy-policy-page">
      <div className="privacy-policy-content">
        <h1>Privacy Policy <FaLock className="policy-icon" /></h1>
        <p>
          At Laura, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, 
          use, and safeguard your personal information. By using our services, you agree to the terms outlined in this policy.
        </p>

        {/* Information We Collect */}
        <div className="policy-section">
          <div className="section-header" onClick={() => toggleSection('information')}>
            <FaUser className="section-icon" />
            <h2>Information We Collect</h2>
            <FaChevronDown className={`collapse-icon ${openSection === 'information' ? 'rotate' : ''}`} />
          </div>
          {openSection === 'information' && (
            <div className="section-content">
              <p>
                We collect the following types of information when you interact with our website or services:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing/shipping address.</li>
                <li><strong>Payment Information:</strong> Credit card details, PayPal account, or other payment methods.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent, and device information.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </div>
          )}
        </div>

        {/* How We Use Your Information */}
        <div className="policy-section">
          <div className="section-header" onClick={() => toggleSection('usage')}>
            <FaShieldAlt className="section-icon" />
            <h2>How We Use Your Information</h2>
            <FaChevronDown className={`collapse-icon ${openSection === 'usage' ? 'rotate' : ''}`} />
          </div>
          {openSection === 'usage' && (
            <div className="section-content">
              <p>
                Your information is used for the following purposes:
              </p>
              <ul>
                <li><strong>Order Processing:</strong> To process and fulfill your orders, including shipping and payment confirmation.</li>
                <li><strong>Customer Support:</strong> To respond to your inquiries, provide assistance, and resolve issues.</li>
                <li><strong>Marketing:</strong> To send you promotional offers, newsletters, and updates (you can opt-out at any time).</li>
                <li><strong>Improvements:</strong> To analyze user behavior and improve our website, products, and services.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Data Security */}
        <div className="policy-section">
          <div className="section-header" onClick={() => toggleSection('security')}>
            <FaLock className="section-icon" />
            <h2>Data Security</h2>
            <FaChevronDown className={`collapse-icon ${openSection === 'security' ? 'rotate' : ''}`} />
          </div>
          {openSection === 'security' && (
            <div className="section-content">
              <p>
                We take data security seriously and implement the following measures to protect your information:
              </p>
              <ul>
                <li><strong>Encryption:</strong> All sensitive data is encrypted during transmission and storage.</li>
                <li><strong>Access Control:</strong> Only authorized personnel have access to your personal information.</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits to ensure compliance with industry standards.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Your Rights */}
        <div className="policy-section">
          <div className="section-header" onClick={() => toggleSection('rights')}>
            <FaInfoCircle className="section-icon" />
            <h2>Your Rights</h2>
            <FaChevronDown className={`collapse-icon ${openSection === 'rights' ? 'rotate' : ''}`} />
          </div>
          {openSection === 'rights' && (
            <div className="section-content">
              <p>
                As a user, you have the following rights regarding your personal data:
              </p>
              <ul>
                <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> You can request the deletion of your personal data under certain conditions.</li>
                <li><strong>Opt-Out:</strong> You can opt-out of receiving marketing communications at any time.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Contact Us */}
        <div className="policy-section">
          <div className="section-header" onClick={() => toggleSection('contact')}>
            <FaEnvelope className="section-icon" />
            <h2>Contact Us</h2>
            <FaChevronDown className={`collapse-icon ${openSection === 'contact' ? 'rotate' : ''}`} />
          </div>
          {openSection === 'contact' && (
            <div className="section-content">
              <p>
                If you have any questions or concerns about our Privacy Policy, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> support@laura.com</li>
                <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                <li><strong>Address:</strong> 123 Fashion Street, New York, NY, USA</li>
              </ul>
            </div>
          )}
        </div>

        {/* Data Retention */}
        <div className="policy-section">
          <div className="section-header" onClick={() => toggleSection('retention')}>
            <FaTrash className="section-icon" />
            <h2>Data Retention</h2>
            <FaChevronDown className={`collapse-icon ${openSection === 'retention' ? 'rotate' : ''}`} />
          </div>
          {openSection === 'retention' && (
            <div className="section-content">
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy. 
                Afterward, your data is securely deleted or anonymized.
              </p>
            </div>
          )}
        </div>

        <button className="accept-button">Accept Privacy Policy</button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;