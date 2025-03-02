const { findEvents, writeEvent } = require('../model/eventModel');

module.exports = {

  getEvents: async (_, res) => {

    try {
      const events = await findEvents();
      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ message: 'server error' });
    }
  },

  setEvent: async (req, res) => {
    const newEvent = req.body;

    if (!newEvent.title || !newEvent.date || !newEvent.description)
      return res.status(400).json({ message: 'Missing fields' });

    try {
      const createdEvent = await writeEvent(newEvent);
      return res.status(201).json(createdEvent);
    } catch (error) {
      return res.status(500).json({ message: 'server error' });
    }
  }
}