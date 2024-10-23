import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './App.css'; // Ensure you have the same CSS for styling

const PaymentPage = () => {
  const { currency } = useParams();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    console.log(`Processing payment with ${currency}`);
    setTimeout(() => {
      setPaymentSuccess(true);
      console.log(`Payment successful with ${currency}`);
    }, 3000);
  };

  const pageTransition = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div {...pageTransition}>
      <div className="container">
        {!paymentSuccess ? (
          <div className="payment-options">
            <h1 className="heading">Pay to Join the Private Channel</h1>
            <h2 className="price">Price: {currency === 'TON' ? '10 TON' : '15 USDT'}</h2>
            <button className="button ton" onClick={handlePayment}>
              Pay with TON
            </button>
            <button className="button usdt" onClick={handlePayment}>
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
    </motion.div>
  );
};

export default PaymentPage;
