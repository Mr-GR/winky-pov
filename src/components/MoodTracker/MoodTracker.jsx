import React, { useState } from 'react';
import './MoodTracker.css';

const moods = [
  { emoji: '😴', label: 'Sleepy' },
  { emoji: '🐶', label: 'Playful' },
  { emoji: '🥺', label: 'Needy' },
  { emoji: '🍗', label: 'Hungry' },
  { emoji: '💩', label: 'Oopsie' },
  { emoji: '😎', label: 'Chill' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');

  return (
    <div className="mood-container">
        <div className="mood-tracker">
        <h2>How’s Winky feeling today?</h2>
        <div className="mood-options">
            {moods.map((mood) => (
            <button
                key={mood.label}
                className={`mood-btn ${selectedMood === mood.label ? 'selected' : ''}`}
                onClick={() => setSelectedMood(mood.label)}
            >
                <span role="img" aria-label={mood.label}>{mood.emoji}</span>
                <p>{mood.label}</p>
            </button>
            ))}
        </div>
        <textarea
            placeholder="Add a little note (optional)..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
        />
        {selectedMood && (
            <div className="mood-summary">
            <h3>Today's Mood: {selectedMood} {moods.find(m => m.label === selectedMood).emoji}</h3>
            {note && <p>Note: {note}</p>}
            </div>
        )}
        </div>
    </div>
  );
};

export default MoodTracker;
