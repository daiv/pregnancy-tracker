import EventListItem from "../EventListItem/EventListItem";
import './EventList.css';
export default function EventList({ eventList, removeEvent }) {
  return (
    <>
      {eventList.length === 0
        ? <h1 className="event-list-container">No events yet</h1>
        : <div className="event-list-container">{
          eventList.map(el => (
            <EventListItem
              key={el._id}
              event={el}
              removeEvent={removeEvent}
            />)
          )
        }</div>
      }
    </>
  );
}