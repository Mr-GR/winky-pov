import React from 'react';
import './MomentCard.css';
import { getMomentImageUrl } from '../../appwrite/api';

const MomentCard = ({ date, title, description, imageId, paws }) => {
  const imageUrl = getMomentImageUrl(imageId);

  return (
    <div className="moment-card">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="moment-image" />
      ) : (
        <div className="image-placeholder">No image</div>
      )}
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
