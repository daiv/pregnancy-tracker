import EventForm from "./EventForm/EventForm";
import EventList from "./EventList/EventList";
import "./Events.css";
export default function Events({ eventList, createEvent, removeEvent }) {

  return (
    <div className="events-container">
      <div className="event-form-wrapper">
        <EventForm createEvent={createEvent} />
      </div>

      <div className="event-list-wrapper">
        <h2 className="next-events-title">Next events</h2>
        <EventList eventList={eventList} removeEvent={removeEvent} />
      </div>
    </div>
  );


}