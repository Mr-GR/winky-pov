import React from 'react';
import './MomentCard.css';

const MomentCard = ({ date, title, description, imageUrl, paws }) => {
  return (
    <div className="moment-card">
      <img
        src={imageUrl}
        alt={title}
        className="moment-image"
        onError={(e) => (e.target.src = '/assets/winkdink.png')} 
      />
      <div className="moment-content">
        <h3>{title}</h3>
        <p className="moment-date">{new Date(date).toDateString()}</p>
        <p>{description}</p>
        <div className="paws">{'🐾'.repeat(paws)}</div>
      </div>
    </div>
  );
};

export default MomentCard;
