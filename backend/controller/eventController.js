const Event = require("../models/event.js");

// Create an event
exports.createEvent = async (req, res) => {
    try {
        const { name, description, date, location } = req.body;
        const newEvent = new Event({ name, description, date, location });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// List all events
exports.listEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get event details
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ error: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ error: 'Event not found' });
        res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
