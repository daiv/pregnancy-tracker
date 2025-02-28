import './Baby.css';
export default function Baby({ dueDate, week, setWeek, currentWeek }) {

  function handleClick(e) {

    if (e.target.id === 'prev') week > 1 && setWeek(week => week - 1);
    else week < 41 && setWeek(week => week + 1);

  }
  return (
    <div className="baby-container">
      <p>{dueDate.toLocaleString().split(' ')[0].replace(',', '')}</p>
      <img src={`/baby/${week}.png`} />
      <div className="week-button-pannel">
        <p>week={week}</p>
        <button id="prev" onClick={handleClick}>prev</button>
        <button id="curr" onClick={() => { setWeek(currentWeek) }}>current</button>
        <button id="next" onClick={handleClick}>next</button>
      </div>
    </div>

  );


}