import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/eventService';
import EventCard from '../components/EventCard';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const data = await getEvents();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
