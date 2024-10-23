import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './App.css'; 
import PaymentPage from './PaymentPage';
import Footer from './Footer'; 
import UserProfile from './UserProfile'; 

const App = () => {
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState("Guest"); // Default username
  const [photoUrl, setPhotoUrl] = useState(""); // State for profile picture

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
    setConnected(true);
    console.log("Wallet connected");
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.pageY - e.currentTarget.offsetTop);
    setScrollTop(e.currentTarget.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - e.currentTarget.offsetTop;
    const walk = (y - startY) * 2; 
    e.currentTarget.scrollTop = scrollTop - walk;
  };

  // Fetch Telegram username and photo URL when the app loads
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      const telegramUsername = tg.initDataUnsafe?.user?.username || "Guest";
      const telegramPhotoUrl = tg.initDataUnsafe?.user?.photo_url || ""; // Get photo URL
      setUsername(telegramUsername);
      setPhotoUrl(telegramPhotoUrl); // Set photo URL
    }
  }, []);

  return (
    <Router>
      <div className="container">
        <UserProfile username={username} photoUrl={photoUrl} /> {/* Pass photoUrl to UserProfile */}
        <button className="wallet-button" onClick={handleWalletConnect}>
          Connect Wallet
        </button>
        {connected && <p className="wallet-status">Wallet Connected</p>}
        
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div {...pageTransition}>
                  <div className="offers-section">
                    <h1 className="heading">Select a Premium Offer</h1>
                    <div 
                      className="offers"
                      onMouseDown={handleMouseDown}
                      onMouseLeave={handleMouseLeave}
                      onMouseUp={handleMouseUp}
                      onMouseMove={handleMouseMove}
                    >
                      {offers.map((offer, index) => (
                        <div key={index} className="offer-card">
                          <h3>{offer.title}</h3>
                          <p className="offer-price">{offer.price}</p>
                          <Link to={`/payment/${offer.currency}`} className="offer-button-link">
                            <button className="button pay-button">Proceed to Payment</button>
                          </Link>
                        </div>
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
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
