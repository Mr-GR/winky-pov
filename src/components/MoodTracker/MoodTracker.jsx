import React, { useState, useEffect } from 'react';
import './MoodTracker.css';
import { saveMoodToDatabase, fetchCurrentMood } from '../../appwrite/api';

const moods = [
  { emoji: '😴', label: 'Sleepy' },
  { emoji: '🐶', label: 'Playful' },
  { emoji: '🥺', label: 'Needy' },
  { emoji: '🍗', label: 'Hungry' },
  { emoji: '💩', label: 'Oopsie' },
  { emoji: '😎', label: 'Chill' },
  { emoji: '🤢', label: 'Stinky' },
  { emoji: '😠', label: 'Grumpy' },
];

const getTodayEST = () =>
  new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' });

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    const loadCurrentMood = async () => {
      try {
        const currentMood = await fetchCurrentMood();
        if (currentMood) {
          setSelectedMood(currentMood.mood);
          setNote(currentMood.note || '');
        }
      } catch (error) {
        console.error('Error loading mood:', error);
      }
    };
    
    loadCurrentMood();
  }, []);

  const handleMoodSelect = async (mood) => {
    const today = getTodayEST();
    const entry = {
      mood: mood.label,
      emoji: mood.emoji,
      note,
      date: today,
    };
    setSelectedMood(mood.label);
    
    try {
      await saveMoodToDatabase(entry);
    } catch (error) {
      console.error('Error saving mood:', error);
    }
  };

  const handleNoteChange = async (e) => {
    const updatedNote = e.target.value;
    setNote(updatedNote);

    if (selectedMood) {
      const currentMood = moods.find(m => m.label === selectedMood);
      const today = getTodayEST();
      const entry = {
        mood: selectedMood,
        emoji: currentMood?.emoji,
        note: updatedNote,
        date: today,
      };
      
      try {
        await saveMoodToDatabase(entry);
      } catch (error) {
        console.error('Error updating mood note:', error);
      }
    }
  };

  const clearMood = async () => {
    setSelectedMood(null);
    setNote('');
    
    try {
      await saveMoodToDatabase({
        mood: null,
        emoji: null,
        note: '',
        date: getTodayEST(),
      });
    } catch (error) {
      console.error('Error clearing mood:', error);
    }
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
