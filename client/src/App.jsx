import { useEffect, useState } from 'react';
import WeekCards from './components/WeekCards/WeekCards.jsx';
import Baby from './components/Baby/Baby.jsx';
import Events from './components/Events/Events.jsx';
import func from './helperFun.js';


function App() {

  const [week, setWeek] = useState(2);
  const [currentWeek, setCurrentWeek] = useState(2);
  const [lpd, setlpd] = useState();
  const [day, setDay] = useState('');
  const [dueDate, setdueDate] = useState('');
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    func.http.getLpd().then(lastPeriodDate => {
      if (lastPeriodDate.length > 0) {
        const { lpd } = lastPeriodDate[0];
        if (lpd) setDates(lpd);
      }
    });
    func.http.getEvents().then(events => {

      if (events) setEventList(events
        .filter(event => new Date(event.date) >= Date.now())
        .sort((a, b) => new Date(a.date) - new Date(b.date)));
    });

  }, []);
  function setDates(lpd) {
    const { days, weeks, dueDate } = func.getImportantDates(lpd);
    setlpd(lpd);
    setCurrentWeek(weeks > 41 ? 41 : weeks);
    setWeek((weeks > 41 ? 41 : weeks));
    setDay(days);
    setdueDate(dueDate);
  }
  function postDates(lpd) {
    setDates(lpd);
    func.http.setLpd({ lpd });
  }
  function createEvent(event) {
    func.http.setEvent(event).then(newEvent => {
      if (newEvent) setEventList([...eventList, newEvent].sort((a, b) => new Date(a.date) - new Date(b.date)));
    });
  }
  function removeEvent(event) {
    func.http.deleteEvent(event._id);
    setEventList(eventList.filter(el => el._id !== event._id));
  }
  return (
    <div className='app-container'>
      <WeekCards week={week} />
      <Baby id="baby" lpd={lpd} dueDate={dueDate} week={week} day={day} setWeek={setWeek} currentWeek={currentWeek} postDates={postDates} />
      <Events eventList={eventList} createEvent={createEvent} removeEvent={removeEvent} />

    </div>
  );
}

export default App
