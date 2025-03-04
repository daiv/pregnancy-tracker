import EventItem from "./EventItem";
import './EventList.css';
export default function EventList({ eventList, removeEvent }) {
  return (
    <>
      {eventList.length === 0
        ? <h1>no events yet</h1>
        : <div className="event-list-container">{eventList.map(el => <EventItem key={el._id} event={el} removeEvent={removeEvent} />)}</div>
      }
    </>
  );
}