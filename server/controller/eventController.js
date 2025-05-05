import { findEvents, writeEvent, removeEvent, findEvent } from '../model/eventModel.js';

export async function getEvents(_, res) {

  try {
    res.status(200).json(await findEvents());
  } catch (error) {
    res.status(500).json('server error');
  }
}

export async function setEvent(req, res) {
  const newEvent = req.body;
  if (!newEvent.title, !newEvent.date, !newEvent.description) return res.status(400).json('Missing fields');

  try {
    res.status(201).json(await writeEvent(newEvent));
  } catch (error) {
    res.status(500).json('server error');
  }
}

export async function deleteEvent(req, res) {
  
  const id = req.params.id;

  if (!id) return res.status(400).json('Missing id');
  if (typeof id === 'string' && id.length !== 24) return res.status(400).json('Invalid id');
  try {
    if (await findEvent(id) === null) return res.status(404).json('Event not found');
    res.status(200).json(await removeEvent(id));
  } catch (error) {
    res.status(500).json('server error');
  }

}