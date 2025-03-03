import './EventItem.css';
export default function EventItem({ event, removeEvent }) {

  return (
    <>
      <div className="event-item-container">
        <p id='title'>{event.title}</p>
        <p id='date'>{new Date(event.date).toLocaleDateString()}</p>
        <p id='description'>{event.description}</p>
        <p id='place'>{event.place}</p>
        <button id='remove' onClick={() => removeEvent(event)}>remove</button>

      </div>
    </>

  );
}