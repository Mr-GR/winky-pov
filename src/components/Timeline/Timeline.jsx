import React from 'react';
import MomentCard from '../MomentCard/MomentCard';
import './Timeline.css';

const Timeline = ({ moments }) => (
  <div className="timeline-container">
    <div className="timeline">
      {moments.map((moment, index) => (
        <MomentCard key={index} {...moment} />
      ))}
    </div>
  </div>
);

export default Timeline;
