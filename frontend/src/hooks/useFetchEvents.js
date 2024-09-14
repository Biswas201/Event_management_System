import { useState, useEffect } from 'react';
import { getEvents } from '../services/eventService';

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getEvents();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return { events, loading, error };
};

export default useFetchEvents;
