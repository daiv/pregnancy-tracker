import './Baby.css';
export default function Baby({ lpd, dueDate, week, day, setWeek, currentWeek }) {
  if (lpd) lpd = new Date(lpd);

  function handleClick(e) {

    if (e.target.id === 'prev') week > 1 && setWeek(week => week - 1);
    else week < 41 && setWeek(week => week + 1);

  }
  return (
    <div className="baby-container">
      {lpd ? <p>Last period date: {lpd.toLocaleString().split(' ')[0].replace(',', '')}</p> : ''}
      <p>Expected due date: {dueDate.toLocaleString().split(' ')[0].replace(',', '')}</p>
      <img src={`/baby/${week}.png`} />
      <div className="week-button-pannel">
        <p>week={week} + {day ? day : 0}</p>
        <button id="prev" onClick={handleClick}>prev</button>
        <button id="curr" onClick={() => { setWeek(currentWeek) }}>current</button>
        <button id="next" onClick={handleClick}>next</button>
      </div>
    </div>

  );


}