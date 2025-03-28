import { model, Schema } from "mongoose";


const eventSchema = new Schema({
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

const Event = model('events', eventSchema);

export async function findEvents() {
  const events = await Event.find();
  return events;
}

export async function writeEvent(eventObj) {
  const newLpd = new Event(eventObj);
  return await newLpd.save();
}

export async function removeEvent(id) {
  const deletedEvent = await Event.findByIdAndDelete(id);
  return deletedEvent;
}