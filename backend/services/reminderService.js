const cron = require('node-cron');
const Event = require('../models/event.js');
const { sendEmailNotification } = require('./notificationService');

// Schedule a reminder for an event (runs at the scheduled time)
exports.scheduleEventReminder = (eventId, email, time) => {
    cron.schedule(time, async () => {
        try {
            const event = await Event.findById(eventId);
            if (!event) {
                console.log('Event not found');
                return;
            }

            const message = `Reminder: The event "${event.name}" is happening on ${event.date}`;
            await sendEmailNotification(email, 'Event Reminder', message);

            console.log(`Reminder sent to ${email} for event: ${event.name}`);
        } catch (error) {
            console.error('Error sending reminder:', error);
        }
    });
};
