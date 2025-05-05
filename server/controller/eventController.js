import { findEvents, writeEvent, removeEvent, findEvent } from '../model/eventModel.js';

export async function getEvents(_, res) {

  try {
    const events = await findEvents();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
}

export async function setEvent(req, res) {
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

export async function deleteEvent(req, res) {

  const id = req.params.id;
  if (!id) return res.status(400).json({ message: 'Missing id' });
  if (typeof id === 'string' && id.length !== 24) return res.status(400).json({ message:'Invalid id'});
  try {
    const event = await findEvent(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    const removedEvent = await removeEvent(id);
    res.status(200).json(removedEvent);
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
}

