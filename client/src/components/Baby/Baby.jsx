import './Baby.css';
import LPDform from './LPDform/LPDform';
export default function Baby({ lpd, dueDate, week, day, setWeek, currentWeek, postDates }) {

  if (lpd) lpd = new Date(lpd);
  const lpdFormatedDate = lpd ? lpd.toLocaleString().split(' ')[0].replace(',', '') : null;
  const dueDateFormatedDate = dueDate ? dueDate.toLocaleString().split(' ')[0].replace(',', '') : null;
  const displayDay = day || 0;

  function handleClick(e) {
    if (e.target.id === 'prev') week >= 1 && setWeek(week => week - 1);
    else week < 41 && setWeek(week => week + 1);
  }

  return (

    <div className="baby-container">
      <h1 className='main-title'>
        WEEK {week} + {displayDay} DAYS
      </h1>

      <div className='date-display-wrapper'>
        <div className='lpd-form-row'>
          
          <LPDform postDates={postDates} />
        </div>
        <div className='calculated-dates-row'>
          {lpdFormatedDate && <p>Last period date: {lpdFormatedDate}</p>}
          {lpdFormatedDate && <p>Expected due date: {dueDateFormatedDate}</p>}
        </div>
      </div>

      <div className='image-and-nav-wrapper'>
        <div className='image-container'>
          <img className='baby-image'
            alt={`Development week ${week}`}
            src={`/baby/${week < 0 ? 0 : week > 42 ? 42 : week}.png`} />
        </div>

        <div className="nav-buttons-bar">
          <button id='first' onClick={() => setWeek(0)}>First</button>
          <button id="prev" onClick={handleClick}>Prev</button>
          <button id="curr" onClick={() => { setWeek(currentWeek) }}>Current</button>
          <button id="next" onClick={handleClick}>Next</button>
          <button id='last' onClick={() => setWeek(41)}>Last</button>
        </div>
      </div>
    </div>

  );

}