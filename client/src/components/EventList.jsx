import EventItem from "./EventItem";

export default function EventList({ eventList }) {
  return (
    <>
      {eventList.length === 0
        ? <h1>no events yet</h1>
        : eventList.map(el => <EventItem key={el._id} eventInfo={el} />)}
    </>
  );
}