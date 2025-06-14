import React from 'react';
import './MomentCard.css';

const MomentCard = ({ date, title, description, image, paws }) => {
  return (
    <div className="moment-card">
      <img src={image} alt={title} className="moment-image" />
      <div className="moment-content">
        <h3>{title}</h3>
        <p className="moment-date">{date}</p>
        <p>{description}</p>
        <div className="paws">
          {'🐾'.repeat(paws)}
        </div>
      </div>
    </div>
  );
};

export default MomentCard;
