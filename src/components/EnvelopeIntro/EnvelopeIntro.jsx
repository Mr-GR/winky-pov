import React from 'react';
import './EnvelopeIntro.css';

const EnvelopeIntro = ({ onOpen }) => {
  return (
    <div className="envelope-screen" onClick={onOpen}>
      <div className="envelope">✉️</div>
      <p className="tap-to-open">Tap to open a great suprises</p>
    </div>
  );
};

export default EnvelopeIntro;
