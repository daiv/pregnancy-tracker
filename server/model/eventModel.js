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
  return await Event.find();
}

export async function writeEvent(eventObj) {
  const newLpd = new Event(eventObj);
  return await newLpd.save();
}

export async function findEvent(id) {
  return await Event.findById(id);
}

export async function removeEvent(id) {
  return await Event.findByIdAndDelete(id);
}