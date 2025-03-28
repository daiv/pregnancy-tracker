import { findEvents, writeEvent, removeEvent } from '../model/eventModel.js';

export async function getEvents(_, res) {

  try {
    res.status(201).json(await findEvents());
  } catch (error) {
    res.status(500).json('server error');
  }
}

export async function setEvent(req, res) {
  const newEvent = req.body;
  if (!newEvent.title, !newEvent.date, !newEvent.description) res.status(400).json('Missing fields');

  try {
    res.status(201).json(await writeEvent(newEvent));
  } catch (error) {
    res.status(500).json('server error');
  }
}

export async function deleteEvent(req, res) {
  const id = req.params.id;
  if (id) {
    try {
      res.status(200).json(await removeEvent(id));
    } catch (error) {
      res.status(500).json('server error');
    }
  }
}