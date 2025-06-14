import React from 'react';
import './EnvelopeIntro.css';

const EnvelopeIntro = ({ onOpen }) => {
  return (
    <div className="envelope-screen" onClick={onOpen}>
      <div className="envelope">✉️</div>
      <p className="tap-to-open">Tap to open your love story</p>
    </div>
  );
};

export default EnvelopeIntro;
