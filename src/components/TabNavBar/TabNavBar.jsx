import React from 'react';
import './TabNavBar.css';

const TabNavBar = ({ currentTab, onTabChange }) => {
  return (
    <div className="tab-nav-bar">
      {['Home', 'Add', 'Mood'].map((tab, index) => (
        <button
          key={index}
          className={`tab-button ${currentTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab === 'Home' && '🏠'}
          {tab === 'Add' && '📸'}
          {tab === 'Mood' && '🐶'}
          <span className="tab-label">{tab}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavBar;
