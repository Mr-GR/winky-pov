import React, { useState } from 'react';
import './AddMoment.css';

const AddMoment = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [paws, setPaws] = useState(5);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) return;

    onAdd({
      title,
      description,
      image,
      paws,
      date: new Date().toISOString().split('T')[0],
    });

    setTitle('');
    setDescription('');
    setImage(null);
    setPaws(5);
  };

  return (
    <div className="add-moment-container">
      <form className="add-moment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Moment title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write a sweet memory..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {image && <img src={image} alt="preview" className="image-preview" />}
        <label>Paw Rating: {paws} 🐾</label>
        <input
          type="range"
          min="1"
          max="5"
          value={paws}
          onChange={(e) => setPaws(parseInt(e.target.value))}
        />
        <button type="submit">Add to Timeline</button>
      </form>
    </div>
  );
};

export default AddMoment;
