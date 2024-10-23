import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <Link to="/" className="footer-icon" aria-label="Home">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          <Link to="/payment/TON" className="footer-icon" aria-label="Payment">
            <i className="fas fa-credit-card"></i>
            <span>Payment</span>
          </Link>
          <Link to="/wallet" className="footer-icon" aria-label="Wallet">
            <i className="fas fa-wallet"></i>
            <span>Wallet</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
