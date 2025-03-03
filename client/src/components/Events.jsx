import EventForm from "./EventForm";
import EventList from "./EventList";
import './Events.css';
export default function Events({ eventList, createEvent, removeEvent }) {

  return (
    <div className="events-container">
      <EventForm createEvent={createEvent} />
      <EventList eventList={eventList} removeEvent={removeEvent} />
    </div>
  );


}