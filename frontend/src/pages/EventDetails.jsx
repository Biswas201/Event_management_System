import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/eventService';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    async function fetchEventDetails() {
      const data = await getEventById(id);
      setEvent(data);
    }
    fetchEventDetails();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
