import { useState } from 'react';
import './EventForm.css';

export default function EventForm({ createEvent }) {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [place, setPlace] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ title, date, description, place });
    if (title && date && description) {
      createEvent({ title, date, description, place });
      resetFields();
    } else alert('title, date and description are required');
  }
  function resetFields() {
    setTitle('');
    setDate('');
    setDescription('');
    setPlace('');
  }
  return (
    <form className="event-form-container" onSubmit={handleSubmit}>

      <h3>Title</h3>
      <input id='title' placeholder='title' value={title} onChange={e => setTitle(e.target.value)} />
      <h3>Date</h3>
      <input id='date' type='date' onChange={e => {
        const dateString = new Date(e.target.value).toISOString();
        setDate(dateString);
      }} />
      <h3>Description</h3>
      <textarea id='description' placeholder='description' value={description} onChange={e => setDescription(e.target.value)} />
      <h3>Place</h3>
      <input id='place' placeholder='place' value={place} onChange={e => setPlace(e.target.value)} />
      <input type='reset' value='Reset' onClick={resetFields} />
      <button type='submit'>Submit</button>

    </form>
  );
}