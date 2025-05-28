import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-decorative"></div>
      <div className="footer-content">
        <p>
          &copy; 2025 <span className="footer-brand">Flavorythm</span>. 
          All rights reserved. Made with ❤️ for food lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;