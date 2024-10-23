import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="/" className="footer-icon" aria-label="Home">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
          <a href="/payment/TON" className="footer-icon" aria-label="Payment">
            <i className="fas fa-credit-card"></i>
            <span>Payment</span>
          </a>
          <a href="/wallet" className="footer-icon" aria-label="Wallet">
            <i className="fas fa-wallet"></i>
            <span>Wallet</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
