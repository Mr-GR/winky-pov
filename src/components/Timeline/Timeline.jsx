import React from 'react';
import MomentCard from '../MomentCard/MomentCard';
import './Timeline.css';

const Timeline = ({ moments }) => {
  const sorted = [...moments].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="timeline-container">
      <div className="timeline">
        {sorted.map((moment) => (
          <MomentCard key={moment.$id} {...moment} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
