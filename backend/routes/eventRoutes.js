const express = require('express');
const { createEvent, listEvents, getEventById, deleteEvent } = require("../controller/eventController.js");
const router = express.Router();

router.post('/', createEvent);
router.get('/', listEvents);
router.get('/:id', getEventById);
router.delete('/:id', deleteEvent);

module.exports = router;
