const { findEvents, writeEvent } = require('../model/eventModel');

module.exports = {

  getEvents: async (_, res) => {

    try {
      res.status(201).json(await findEvents());
    } catch (error) {
      res.status(500).json('server error');
    }
  },

  setEvent: async (req, res) => {
    const newEvent = req.body;
    if (!newEvent.title, !newEvent.date, !newEvent.description) res.status(400).json('Missing fields');

    try {
      res.status(201).json(await writeEvent(newEvent));
    } catch (error) {
      res.status(500).json('server error');
    }
  }
}