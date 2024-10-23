// OfferCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = ({ offer }) => {
  return (
    <Link to={`/payment/${offer.currency}`} className="offer">
      <div className="offer-card">
        <img src={offer.imageUrl} alt={`${offer.title} logo`} className="offer-image" />
        <h3>{offer.title}</h3>
        <p className="offer-price">{offer.price}</p>
      </div>
    </Link>
  );
};

export default OfferCard;
