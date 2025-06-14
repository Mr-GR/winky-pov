import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';
import EnvelopeIntro from './components/EnvelopeIntro/EnvelopeIntro';

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);

  return (
    <div className="app">
      {showEnvelope ? (
        <EnvelopeIntro onOpen={() => setShowEnvelope(false)} />
      ) : (
        <>
          <Header />
          <Timeline />
        </>
      )}
    </div>
  );
}

export default App;
