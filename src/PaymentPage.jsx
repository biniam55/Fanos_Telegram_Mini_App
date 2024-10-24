import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import './App.css'; // Ensure you have the same CSS for styling

const PaymentPage = () => {
  const { currency, price } = useParams(); // Extract price along with currency
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currency); // State to track selected currency
  const [convertedTonPrice, setConvertedTonPrice] = useState(null);

  // Fixed conversion rate for demonstration (e.g., 1 USDT = 5 TON)
  const USDT_TO_TON_CONVERSION_RATE = 0.148938;

  const handlePayment = () => {
    console.log(`Processing payment of ${selectedCurrency === 'TON' ? (convertedTonPrice || price) : price} with ${selectedCurrency}`);
    setTimeout(() => {
      setPaymentSuccess(true);
      console.log(`Payment successful with ${selectedCurrency}`);
    }, 3000);
  };

  // Function to convert USDT to TON
  const convertToTON = () => {
    const tonPrice = (parseFloat(price) * USDT_TO_TON_CONVERSION_RATE).toFixed(2);
    setConvertedTonPrice(tonPrice);
    setSelectedCurrency('TON');
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
            {/* Display the selected price and currency */}
            <h2 className="price">Price: {selectedCurrency === 'TON' ? convertedTonPrice : price} {selectedCurrency}</h2>

            {/* Payment buttons */}
            <button className="button ton" onClick={handlePayment}>
              Pay with {selectedCurrency === 'TON' ? 'TON' : 'USDT'}
            </button>

            {/* If the offer is in USDT, show a button to convert to TON */}
            {selectedCurrency === 'USDT' && (
              <button className="button ton" onClick={convertToTON}>
                Pay with TON
              </button>
            )}
          </div>
        ) : (
          <div className="confirmation-section">
            <h1 className="heading">Payment Confirmed!</h1>
            <p className="description">You can now join our private Telegram channel.</p>
            <button className="button join" onClick={() => window.open('https://t.me/+E7sExmwuLjpjZjRk', '_blank')}>
              Join Private Channel
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PaymentPage;
