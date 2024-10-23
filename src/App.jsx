import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import './App.css'; // Make sure to create this CSS file
import PaymentPage from './PaymentPage'; // Import the PaymentPage component

const App = () => {
  const [connected, setConnected] = useState(false); // State to manage wallet connection
  const username = "Username"; // Replace with dynamic username if needed

  const offers = [
    { title: 'Premium Offer 1', price: '10 TON', currency: 'TON' },
    { title: 'Premium Offer 2', price: '15 USDT', currency: 'USDT' },
    { title: 'Premium Offer 3', price: '20 TON', currency: 'TON' },
  ];

  const pageTransition = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };

  const handleWalletConnect = () => {
    // Simulate wallet connection
    setConnected(true);
    console.log("Wallet connected");
  };

  return (
    <Router>
      <div className="container">
        <h2 className="username">Welcome, {username}!</h2>
        
        {/* Wallet Connect Button */}
        <button className="wallet-button" onClick={handleWalletConnect}>
          Connect Wallet
        </button>
        {connected && <p className="wallet-status">Wallet Connected</p>}
        
        <Routes>
          <Route
            path="/"
            element={
              <motion.div {...pageTransition}>
                <div className="offers-section">
                  <h1 className="heading">Select a Premium Offer</h1>
                  <div className="offers">
                    {offers.map((offer, index) => (
                      <Link key={index} to={`/payment/${offer.currency}`} className="offer">
                        <div className="offer-card">
                          <h3>{offer.title}</h3>
                          <p className="offer-price">{offer.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            }
          />
          <Route
            path="/payment/:currency"
            element={
              <motion.div {...pageTransition}>
                <PaymentPage />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
