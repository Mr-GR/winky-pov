import React from 'react';
import MomentCard from '../MomentCard/MomentCard';
import './Timeline.css';
import firstBarkImg from '../../assets/first-bark.jpg';
import couchImg from '../../assets/couch.jpg';

const moments = [
  {
    date: '2022-06-10',
    title: 'The First Bark',
    description: 'I saw Mom bring you home. I barked... but in a good way!',
    image: firstBarkImg,
    paws: 4,
  },
  {
    date: '2023-01-15',
    title: 'Couch Cuddles',
    description: 'I claimed the middle seat. You both squeezed in. Classic.',
    image: couchImg,
    paws: 5,
  },
  {
    date: '2022-06-10',
    title: 'The First Bark',
    description: 'I saw Mom bring you home. I barked... but in a good way!',
    image: firstBarkImg,
    paws: 4,
  },
  {
    date: '2023-01-15',
    title: 'Couch Cuddles',
    description: 'I claimed the middle seat. You both squeezed in. Classic.',
    image: couchImg,
    paws: 5,
  },
    {
    date: '2022-06-10',
    title: 'The First Bark',
    description: 'I saw Mom bring you home. I barked... but in a good way!',
    image: firstBarkImg,
    paws: 4,
  },
  {
    date: '2023-01-15',
    title: 'Couch Cuddles',
    description: 'I claimed the middle seat. You both squeezed in. Classic.',
    image: couchImg,
    paws: 5,
  },
    {
    date: '2022-06-10',
    title: 'The First Bark',
    description: 'I saw Mom bring you home. I barked... but in a good way!',
    image: firstBarkImg,
    paws: 4,
  },
  {
    date: '2023-01-15',
    title: 'Couch Cuddles',
    description: 'I claimed the middle seat. You both squeezed in. Classic.',
    image: couchImg,
    paws: 5,
  },
    {
    date: '2022-06-10',
    title: 'The First Bark',
    description: 'I saw Mom bring you home. I barked... but in a good way!',
    image: firstBarkImg,
    paws: 4,
  },
  {
    date: '2023-01-15',
    title: 'Couch Cuddles',
    description: 'I claimed the middle seat. You both squeezed in. Classic.',
    image: couchImg,
    paws: 5,
  },
];

const Timeline = () => (
  <div className="timeline">
    {moments.map((moment, index) => (
      <MomentCard key={index} {...moment} />
    ))}
  </div>
);

export default Timeline;
