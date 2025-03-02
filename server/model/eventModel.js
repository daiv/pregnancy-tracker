const mongoose = require('./index');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  place: {
    type: String
  }

});

const Event = mongoose.model('events', eventSchema);

module.exports = {

  findEvents: async () => {
    const events = await Event.find();
    return events;
  },
  writeEvent: async (eventObj) => {

    const newLpd = new Event(eventObj);

    return await newLpd.save();

  }
}