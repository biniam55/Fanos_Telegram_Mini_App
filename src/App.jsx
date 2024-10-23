import React, { useState } from 'react';
import './App.css'; // Make sure to create this CSS file

const App = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (currency) => {
    console.log(`Processing payment with ${currency}`);
    setTimeout(() => {
      setPaymentSuccess(true);
      console.log(`Payment successful with ${currency}`);
    }, 3000);
  };

  return (
    <div className="container">
      {!paymentSuccess ? (
        <div className="payment-section">
          <h1 className="heading">Join Our Private Telegram Channel</h1>
          <p className="description">Pay with TON or USDT to gain access.</p>

          <button className="button ton" onClick={() => handlePayment('TON')}>
            Pay with TON
          </button>
          <button className="button usdt" onClick={() => handlePayment('USDT')}>
            Pay with USDT
          </button>
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
