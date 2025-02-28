import { useState } from "react";
import { mock } from "../mocks/mock";


export default function Form() {
  const [babyText, setBabyText] = useState('baby');
  const [motherText, setMotherText] = useState('mother');
  const [week, setWeek] = useState(0);
  const [expectedDue, setExpectedDue] = useState('');

  function handleChanged(e) {
    (setWeeks(e.target.value));
    updateText();
  }
  function addWeek() {
    if (week >= mock.length - 1) return;
    setWeek(week + 1);
    updateText();
  }
  function substractWeek() {
    if (week < 1) return;
    setWeek(week - 1);
    updateText();
  }
  function updateText() {
    setBabyText(mock[week === 0 ? week : week - 1].bebe);
    setMotherText(mock[week === 0 ? week : week - 1].madre);
  }
  return <h1>form</h1>;
  (
    <div>
      <img src={`/public/baby/${week}.png`} />
      <h3>Select your last period's date</h3>
      <input type="date" onChange={handleChanged}></input>
      <p>week: {week}</p>
      <p>expected due date:{expectedDue}</p>
      <p>baby: {babyText}</p>
      <p>mother: {motherText}</p>
      <button onClick={substractWeek}>substractWeek</button>
      <button onClick={addWeek}>addWeek</button>
      <br></br>

    </div>
  );
  function setWeeks(lastPeriodDateString) {

    const today = new Date();
    const lastPeriod = new Date(lastPeriodDateString);

    setWeek(Math.floor((today - lastPeriod) / (1000 * 60 * 60 * 24 * 7)));
    console.log('today', today);
    console.log('lastPeriod', lastPeriod);
    console.log('+1', lastPeriod.getDate() + 1)
    const expectedDue = new Date(lastPeriod);
    expectedDue.setDate(lastPeriod.getDate() + 40 * 7);
    console.log(expectedDue, expectedDue);

    setExpectedDue(expectedDue.toDateString());
  }
}



