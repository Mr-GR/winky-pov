import React, { useEffect, useState } from 'react';
import { saveMoodToDatabase, fetchCurrentMood } from '../../appwrite/api';

const getTodayEST = () =>
  new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' });

const DailyMoodDisplay = () => {
  const [mood, setMood] = useState(null);


  useEffect(() => {
    const loadCurrentMood = async () => {
      try {
        const currentMood = await fetchCurrentMood();
        if (currentMood) {
          setMood(currentMood);
        }
      } catch (error) {
        console.error('Error loading mood:', error);
      }
    };

    loadCurrentMood();
  }, []);

  if (!mood) return null;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Winky’s Mood Today</h3>
      <div style={styles.card}>
        <span style={styles.emoji}>{mood.emoji}</span>
        <p style={styles.label}>{mood.mood}</p>
        {mood.note && <p style={styles.note}>“{mood.note}”</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '1.2rem',
    color: '#555',
  },
  card: {
    backgroundColor: '#fff6fa',
    borderRadius: '16px',
    padding: '1rem 2rem',
    display: 'inline-block',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  },
  emoji: {
    fontSize: '2.5rem',
  },
  label: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  note: {
    fontStyle: 'italic',
    color: '#777',
    fontSize: '0.95rem',
  },
};

export default DailyMoodDisplay;
