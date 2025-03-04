import './Baby.css';
import LPDform from './LPDform';
export default function Baby({ lpd, dueDate, week, day, setWeek, currentWeek, postDates }) {

  if (lpd) lpd = new Date(lpd);
  
  function handleClick(e) {

    if (e.target.id === 'prev') week >= 1 && setWeek(week => week - 1);
    else week < 41 && setWeek(week => week + 1);

  }
  return (

    <div className="baby-container">

      <LPDform postDates={postDates} />
      <div className='dates-container'>

        {lpd
          ? <p>Last period date: {lpd.toLocaleString().split(' ')[0].replace(',', '')}</p>
          : ''}

        {lpd
          ? <p>week={week} + {day ? day : 0} days</p>
          : <p>week={week}</p>
        }
        {lpd
          ? <p>Expected due date: {dueDate.toLocaleString().split(' ')[0].replace(',', '')}</p>
          : ''}

      </div>

      <img src={`/baby/${week < 0 ? 0 : week > 42 ? 42 : week}.png`} />

      <div className="week-button-pannel">

        <button id='first' onClick={() => setWeek(0)}>first</button>
        <button id="prev" onClick={handleClick}>prev</button>
        <button id="curr" onClick={() => { setWeek(currentWeek) }}>current</button>
        <button id="next" onClick={handleClick}>next</button>
        <button id='last' onClick={() => setWeek(41)}>last</button>

      </div>
    </div>

  );

}