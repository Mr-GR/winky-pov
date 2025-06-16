import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import TabNavBar from './components/TabNavBar/TabNavBar';
import EnvelopeIntro from './components/EnvelopeIntro/EnvelopeIntro';
import AddMoment from './components/AddMoment/AddMoment';
import DailyMoodDisplay from './components/MoodTracker/DailyMoodDisplay';
import MoodTracker from './components/MoodTracker/MoodTracker';
import firstBarkImg from './assets/first-bark.jpg';

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [tab, setTab] = useState('Home');

  const defaultMoments = [
    {
      date: '2018',
      title: 'The First Bark',
      description: 'I saw Mom bring you home. I barked... but in a good way!',
      image: firstBarkImg,
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

          <TabNavBar currentTab={tab} onTabChange={setTab} />

          {tab === 'Mood' && <MoodTracker />}
        </>
      )}
    </div>
  );
}

export default App;
