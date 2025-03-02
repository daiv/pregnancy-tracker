import './App.css'
import { useEffect, useState } from 'react';
import Info from './Info';
import Baby from './Baby';
import LPDform from './LPDform';
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
      if (events) setEventList(events);
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
      if (newEvent) setEventList([...eventList, newEvent]);
    });
  }
  return (
    <div className='app-container'>
      <Info week={week} />
      <Baby id="baby" lpd={lpd} dueDate={dueDate} week={week} day={day} setWeek={setWeek} currentWeek={currentWeek} />
      {lpd ? <Events eventList={eventList} createEvent={createEvent} /> : <LPDform postDates={postDates} />}
    </div>
  );
}

export default App
