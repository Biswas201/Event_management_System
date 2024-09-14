import React, { useState } from 'react';
import { createEvent } from '../services/eventService';

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { name, description, date, location };
    await createEvent(newEvent);
    alert('Event created successfully!');
  };

  return (
    <div>
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
