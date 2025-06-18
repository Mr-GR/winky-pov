import React from 'react';
import './ConfirmDialog.css';

const ConfirmDialog = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="confirm-backdrop">
      <div className="confirm-modal">
        <p>{message}</p>
        <div className="confirm-buttons">
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="confirm-btn" onClick={onConfirm}>Yes, Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
