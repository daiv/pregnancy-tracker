import './App.css'
import { useEffect, useState } from 'react';
import Info from './Info';
import Baby from './Baby';
import LPDform from './LPDform';
import func from '../helperFun';

function App() {

  const [week, setWeek] = useState('2');
  const [currentWeek, setCurrentWeek] = useState(16);
  const [lpd, setlpd] = useState();
  const [day, setDay] = useState('');
  const [dueDate, setdueDate] = useState('');

  useEffect(() => {

    func.http.getLpd().then(res => {
      const { lpd } = res;
      const { days, weeks, dueDate } = func.getImportantDates(lpd);
      setlpd(lpd);
      setCurrentWeek(weeks);
      setWeek(weeks);
      setDay(days);
      setdueDate(dueDate);
    });

  }, []);

  return (
    <div className='app-container'>
      <Info week={week} />
      <Baby id="baby" dueDate={dueDate} week={week} setWeek={setWeek} currentWeek={currentWeek} />
      <LPDform setlpd={setlpd} />
    </div>
  );
}

export default App
