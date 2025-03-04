import './App.css'
import { useEffect, useState } from 'react';
import Info from './Info';
import Baby from './Baby';
import Events from './Events';
import func from '../helperFun';


function App() {

  const [week, setWeek] = useState(2);
  const [currentWeek, setCurrentWeek] = useState(1);
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
      console.log(events);
      if (events) setEventList(events
        .filter(event => new Date(event.date) >= Date.now())
        .sort((a, b) => new Date(a.date) - new Date(b.date)));
    });

  }, []);
  function setDates(lpd) {
    const { days, weeks, dueDate } = func.getImportantDates(lpd);
    setlpd(lpd);
    setCurrentWeek(weeks);
    setWeek(weeks);
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
      <div className='baby-and-info-container'>

        <Baby id="baby" lpd={lpd} dueDate={dueDate} week={week} day={day} setWeek={setWeek} currentWeek={currentWeek} postDates={postDates} />

        <Info week={week} />
      </div>
      <Events eventList={eventList} createEvent={createEvent} removeEvent={removeEvent} />

    </div>
  );
}

export default App
