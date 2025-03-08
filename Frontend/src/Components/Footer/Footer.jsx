import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo1.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footer_logo} alt="Laura Logo" />
          <p>LAURA</p>
        </div>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
        <div className="footer-social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram_icon} alt="Instagram" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pinterest_icon} alt="Pinterest" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
