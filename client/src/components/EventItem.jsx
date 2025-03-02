import './EventItem.css';
export default function EventItem({eventInfo }) {
  return (
    <>
      <div className="event-item-container">
        <p id='title'>{eventInfo.title}</p>
        <p id='date'>date</p>
        <p id='description'>{eventInfo.description}</p>
        <p id='place'>{eventInfo.place}</p>

      </div>
    </>


  );
}