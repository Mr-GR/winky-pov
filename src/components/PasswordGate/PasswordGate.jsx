import React, { useState } from 'react';
import './PasswordGate.css';

const PasswordGate = ({ onUnlock }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_SECRET_PASSWORD;

    if (input === correctPassword) {
      onUnlock();
    } else {
      setError('Incorrect password 🕵️');
    }
  };

  return (
    <div className="password-gate">
      <form onSubmit={handleSubmit} className="password-form">
        <h2>🔒 Private Memories</h2>
        <input
          type="password"
          placeholder="Enter secret password..."
          value={input}
          autoFocus={false}
          onChange={(e) => setInput(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Unlock</button>
      </form>
    </div>
  );
};

export default PasswordGate;
