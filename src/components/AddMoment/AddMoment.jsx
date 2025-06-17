import React, { useState } from 'react';
import './AddMoment.css';
import {
  uploadMomentImage,
  getMomentImagePreview,
  saveMomentToDatabase,
} from '../../appwrite/api';

const AddMoment = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [paws, setPaws] = useState(5);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !imageFile) {
      alert('Please fill in all fields and choose an image.');
      return;
    }

    try {
      const uploaded = await uploadMomentImage(imageFile);
      if (!uploaded) throw new Error('Image upload failed');

      const imageUrl = getMomentImagePreview(uploaded.$id);

      const newMoment = await saveMomentToDatabase({
        title,
        description,
        imageUrl,
        paws,
        date: new Date().toISOString().split('T')[0],
      });

      if (!newMoment) throw new Error('Failed to save moment');

      onAdd?.(newMoment); 

      setTitle('');
      setDescription('');
      setImage(null);
      setImageFile(null);
      setPaws(5);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Something went wrong. Please try again.');
    }
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
