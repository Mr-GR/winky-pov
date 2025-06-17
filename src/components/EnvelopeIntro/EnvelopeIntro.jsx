import React from 'react';
import './EnvelopeIntro.css';
import winkDink from '../../assets/winkdink.png'; // make sure this path is correct

const EnvelopeIntro = ({ onOpen }) => {
  return (
    <div className="envelope-screen" onClick={onOpen}>
      <img
        src={winkDink}
        alt="Winky Envelope"
        className="winkdink-image"
      />
      <p className="tap-to-open">Welcome to Cookies POV</p>
    </div>
  );
};

export default EnvelopeIntro;

