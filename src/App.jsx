import React, { useState } from 'react';
import './App.css'; // Make sure to create this CSS file

const App = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false); // New state to manage showing payment options

  const handlePayment = (currency) => {
    const paymentAmount = currency === 'TON' ? 10 : 5; // Example amounts
    setSelectedCurrency(currency);
    setAmount(paymentAmount);
    console.log(`Processing payment with ${currency}`);
    
    setTimeout(() => {
      setPaymentSuccess(true);
      console.log(`Payment successful with ${currency}`);
    }, 3000);
  };

  return (
    <div className="container">
      {!paymentSuccess ? (
        showPaymentOptions ? ( // Conditional rendering based on payment options visibility
          <div className="payment-section">
            <h1 className="heading">Select Your Payment Method</h1>
            <p className="description">Pay with TON or USDT to gain access.</p>

            <div className="payment-buttons">
              <button className="button ton" onClick={() => handlePayment('TON')}>
                Pay with TON
              </button>
              <button className="button usdt" onClick={() => handlePayment('USDT')}>
                Pay with USDT
              </button>
            </div>
          </div>
        ) : (
          <div className="description-section">
            <h1 className="heading">Join Our Exclusive Telegram Community</h1>
            <p className="description">
              Unlock premium content and discussions by joining our private channel. 
              Click the button below to proceed to payment!
            </p>
            <button className="button join" onClick={() => setShowPaymentOptions(true)}>
              Join Our Private Channel
            </button>
          </div>
        )
      ) : (
        <div className="confirmation-section">
          <h1 className="heading">Payment Confirmed!</h1>
          <p className="description">
            You have successfully paid {amount} {selectedCurrency} to join our private Telegram channel.
          </p>
          <button className="button join" onClick={() => window.open('https://t.me/joinchat/your-private-channel', '_blank')}>
            Join Private Channel
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
