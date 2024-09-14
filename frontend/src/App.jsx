import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
