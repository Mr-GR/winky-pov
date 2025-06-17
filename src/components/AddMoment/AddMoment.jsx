import React, { useState } from 'react';
import './AddMoment.css';
import { uploadMomentImage, saveMomentToDatabase } from '../../appwrite/api';
import { toast } from 'react-toastify';

const AddMoment = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [paws, setPaws] = useState(5);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !file) {
      alert('Please fill in all fields and select an image.');
      return;
    }
    
    const toastId = toast.loading('Uploading your moment...');

    try {
      const uploaded = await uploadMomentImage(file);
      if (!uploaded || !uploaded.$id) {
        toast.update(toastId, { render: 'Image upload failed.', type: 'error', isLoading: false, autoClose: 3000 });
        throw new Error('Upload failed');
      }

      const date = new Date().toISOString();

      const saved = await saveMomentToDatabase({
        title,
        description,
        imageId: uploaded.$id,
        paws,
        date,
      });

      if (saved) {
        onAdd(saved);
        setTitle('');
        setDescription('');
        setFile(null);
        setPaws(5);
        toast.update(toastId, { render: 'Moment added successfully!', type: 'success', isLoading: false, autoClose: 3000 });
      } else {
        toast.update(toastId, { render: 'Failed to save moment.', type: 'error', isLoading: false, autoClose: 3000 });
        alert('Saving to database failed.');
      }
    } catch (err) {
      console.error('Upload failed:', err);
      toast.update(toastId, { render: 'Something went wrong.', type: 'error', isLoading: false, autoClose: 3000 });
      alert('Something went wrong while saving your moment.');
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
        {file && <img src={URL.createObjectURL(file)} alt="preview" className="image-preview" />}
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
