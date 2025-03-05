import { useState } from 'react';
import './EventForm.css';

export default function EventForm({ createEvent }) {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newDate = new Date(date);
    console.log({ title, newDate, description, place });
    if (title && date && description) {
      console.log(typeof newDate);
      if (newDate < Date.now()) alert('can not add a past event');
      else {
        createEvent({ title, date: newDate, description, place });
        resetFields();
      }
    } else alert('title, date and description are required');
  }
  function resetFields() {
    setTitle('');
    setDate('');
    setDescription('');
    setPlace('');
  }
  return (
    <form id="eventForm" className="event-form-container" onSubmit={handleSubmit}>
      <label>Title</label>
      <input id='title' placeholder='title' value={title} onChange={e => setTitle(e.target.value)} />
      <label>Date</label>
      <input id='date' type='date' value={date} onChange={e => { setDate(e.target.value); }} />
      <label>Description</label>
      <textarea id='description' placeholder='description' value={description} onChange={e => setDescription(e.target.value)} />
      <label>Place</label>
      <input id='place' placeholder='place' value={place} onChange={e => setPlace(e.target.value)} />
      <div className='hor-buttons'>
        <button id='reset' type='reset' value='Reset' onClick={resetFields}>Reset</button>
        <button type='submit'>Submit</button>

      </div>

    </form>
  );
}