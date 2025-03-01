import './App.css'
import { useEffect, useState } from 'react';
import Info from './Info';
import Baby from './Baby';
import LPDform from './LPDform';
import Events from './Events';
import func from '../helperFun';

function App() {
  //  date calculation variables ------------------
  const [week, setWeek] = useState(2);
  const [currentWeek, setCurrentWeek] = useState(1);
  const [lpd, setlpd] = useState();
  const [day, setDay] = useState('');
  const [dueDate, setdueDate] = useState('');
  //-------------------------------------------------

  //event managing variables --------------------


  //----------------------------------------------
  useEffect(() => {

    func.http.getLpd().then(lastPeriodDate => {
      const { lpd } = lastPeriodDate;
      if (lpd) setDates(lpd);
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
  return (
    <div className='app-container'>
      <Info week={week} />
      <Baby id="baby" lpd={lpd} dueDate={dueDate} week={week} day={day} setWeek={setWeek} currentWeek={currentWeek} />
      {lpd ? <Events /> : <LPDform postDates={postDates} />}
    </div>
  );
}

export default App
