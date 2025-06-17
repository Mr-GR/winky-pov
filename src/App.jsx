import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import TabNavBar from './components/TabNavBar/TabNavBar';
import EnvelopeIntro from './components/EnvelopeIntro/EnvelopeIntro';
import AddMoment from './components/AddMoment/AddMoment';
import DailyMoodDisplay from './components/MoodTracker/DailyMoodDisplay';
import PasswordGate from './components/PasswordGate/PasswordGate';
import MoodTracker from './components/MoodTracker/MoodTracker';
import firstBarkImg from './assets/first-bark.jpg';

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [tab, setTab] = useState('Home');

  const defaultMoments = [
    {
      date: '2018',
      title: 'The First Bark',
      description: 'I saw Mom bring you home. I barked... but in a good way!',
      imageUrl: firstBarkImg,
      paws: 9,
    },
  ];

  const [moments, setMoments] = useState(defaultMoments);

  const handleAddMoment = (newMoment) => {
    setMoments((prev) => [newMoment, ...prev]);
  };

  return (
    <div className="app">
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
