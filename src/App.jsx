import React, { useState } from 'react';
import './App.css'; // Make sure to create this CSS file

const App = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handlePayment = (currency) => {
    console.log(`Processing payment with ${currency} for ${selectedOffer.title}`);
    setTimeout(() => {
      setPaymentSuccess(true);
      console.log(`Payment successful with ${currency}`);
    }, 3000);
  };

  const offers = [
    { title: 'Premium Offer 1', price: '10 TON' },
    { title: 'Premium Offer 2', price: '15 USDT' },
    { title: 'Premium Offer 3', price: '20 TON' },
  ];

  return (
    <div className="container">
      <h2 className="username">Welcome, Username!</h2>
      {!paymentSuccess ? (
        <div className="offers-section">
          <h1 className="heading">Select a Premium Offer</h1>
          <div className="offers">
            {offers.map((offer, index) => (
              <div key={index} className="offer" onClick={() => setSelectedOffer(offer)}>
                <h3>{offer.title}</h3>
                <p>{offer.price}</p>
              </div>
            ))}
          </div>
          {selectedOffer && (
            <div className="payment-options">
              <h2>Pay {selectedOffer.price} to join the private channel.</h2>
              <button className="button ton" onClick={() => handlePayment('TON')}>
                Pay with TON
              </button>
              <button className="button usdt" onClick={() => handlePayment('USDT')}>
                Pay with USDT
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="confirmation-section">
          <h1 className="heading">Payment Confirmed!</h1>
          <p className="description">You can now join our private Telegram channel.</p>
          <button className="button join" onClick={() => window.open('https://t.me/joinchat/your-private-channel', '_blank')}>
            Join Private Channel
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
