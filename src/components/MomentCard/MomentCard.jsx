import React, { useState } from 'react';
import './MomentCard.css';
import { getMomentImageUrl, deleteMoment } from '../../appwrite/api';
import { toast } from 'react-toastify';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const MomentCard = ({ id, date, title, description, imageId, paws, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const imageUrl = getMomentImageUrl(imageId);

  const handleDelete = () => setShowConfirm(true);

  const confirmDelete = async () => {
    try {
      await deleteMoment(id);
      toast.success("Moment deleted 🗑️");
      if (onDelete) onDelete(id);
    } catch (err) {
      toast.error("Failed to delete moment");
    } finally {
      setShowConfirm(false);
    }
  };

  return (
    <>
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
          <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
        </div>
      </div>

      {showConfirm && (
        <ConfirmDialog
          message="Are you sure you want to delete this moment?"
          onCancel={() => setShowConfirm(false)}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
};

export default MomentCard;
