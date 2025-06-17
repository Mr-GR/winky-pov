import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import TabNavBar from './components/TabNavBar/TabNavBar';
import EnvelopeIntro from './components/EnvelopeIntro/EnvelopeIntro';
import AddMoment from './components/AddMoment/AddMoment';
import DailyMoodDisplay from './components/MoodTracker/DailyMoodDisplay';
import MoodTracker from './components/MoodTracker/MoodTracker';
import PasswordGate from './components/PasswordGate/PasswordGate';
import { fetchAllMoments } from './appwrite/api';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [tab, setTab] = useState('Home');
  const [unlocked, setUnlocked] = useState(false);
  const [moments, setMoments] = useState([]);

  const handleAddMoment = (newMoment) => {
    setMoments((prev) => [newMoment, ...prev]);
  };

  useEffect(() => {
    const loadMoments = async () => {
      const data = await fetchAllMoments();
      setMoments(data);
    };

    if (unlocked) {
      loadMoments();
    }
  }, [unlocked]);

  return (
    <div className="app">
      <ToastContainer position="top-center" autoClose={3000} />
      {showEnvelope ? (
        <EnvelopeIntro onOpen={() => setShowEnvelope(false)} />
      ) : !unlocked ? (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          {tab === 'Home' && (
            <>
              <Header />
              <DailyMoodDisplay />
              <Timeline moments={moments} />
            </>
          )}

          {tab === 'Add' && <AddMoment onAdd={handleAddMoment} />}

          {tab === 'Mood' && <MoodTracker />}

          <TabNavBar currentTab={tab} onTabChange={setTab} />
        </>
      )}
    </div>
  );
}

export default App;
