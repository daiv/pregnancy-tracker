import EventForm from "./EventForm";
import EventList from "./EventList";
export default function Events({ eventList, createEvent, removeEvent }) {

  return (
    <div className="events-container">
      <EventForm createEvent={createEvent} />
      <h2>Next events</h2>
      <EventList eventList={eventList} removeEvent={removeEvent} />
    </div>
  );


}