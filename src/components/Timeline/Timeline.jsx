import React from 'react';
import MomentCard from '../MomentCard/MomentCard';
import './Timeline.css';

const Timeline = ({ moments, setMoments }) => {
  const sorted = [...moments].sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleDelete = (deletedId) => {
    setMoments((prev) => prev.filter((moment) => moment.$id !== deletedId));
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        {sorted.map((moment) => (
          <MomentCard
            key={moment.$id}
            id={moment.$id}                 
            title={moment.title}
            description={moment.description}
            date={moment.date}
            paws={moment.paws}
            imageId={moment.imageId}
            onDelete={handleDelete}       
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;

