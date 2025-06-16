import React, { useState, useEffect } from 'react';
import './MoodTracker.css';

const moods = [
  { emoji: '😴', label: 'Sleepy' },
  { emoji: '🐶', label: 'Playful' },
  { emoji: '🥺', label: 'Needy' },
  { emoji: '🍗', label: 'Hungry' },
  { emoji: '💩', label: 'Oopsie' },
  { emoji: '😎', label: 'Chill' },
];

const getTodayEST = () =>
  new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' });

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('winkyMood'));
    const today = getTodayEST();

    if (saved && saved.date === today) {
      setSelectedMood(saved.mood);
      setNote(saved.note || '');
    } else {
      localStorage.removeItem('winkyMood');
    }
  }, []);

  const handleMoodSelect = (mood) => {
    const today = getTodayEST();
    const entry = {
      mood: mood.label,
      emoji: mood.emoji,
      note,
      date: today,
    };
    setSelectedMood(mood.label);
    localStorage.setItem('winkyMood', JSON.stringify(entry));
  };

  const handleNoteChange = (e) => {
    const updatedNote = e.target.value;
    setNote(updatedNote);

    const saved = JSON.parse(localStorage.getItem('winkyMood'));
    if (saved) {
      saved.note = updatedNote;
      localStorage.setItem('winkyMood', JSON.stringify(saved));
    }
  };

  const clearMood = () => {
    setSelectedMood(null);
    setNote('');
    localStorage.removeItem('winkyMood');
  };

  const currentMood = moods.find(m => m.label === selectedMood);

  return (
    <div className="mood-container">
      <div className="mood-tracker">
        <h2>How’s Winky feeling today?</h2>

        <div className="mood-options">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className={`mood-btn ${selectedMood === mood.label ? 'selected' : ''}`}
              onClick={() => handleMoodSelect(mood)}
            >
              <span role="img" aria-label={mood.label}>{mood.emoji}</span>
              <p>{mood.label}</p>
            </button>
          ))}
        </div>

        {selectedMood && (
          <>
            <textarea
              placeholder="Add a little note (optional)..."
              value={note}
              onChange={handleNoteChange}
            />
            <div className="mood-summary">
              <h3>Today's Mood: {selectedMood} {currentMood?.emoji}</h3>
              {note && <p>Note: {note}</p>}
              <button onClick={clearMood}>Clear Mood</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
