import { useState } from "react";

export default function LPDform({ postDates }) {
  const [date, setDate] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (date) {
      if (new Date(date) < Date.now()) {
        postDates(date);
      } else alert('last period can not set the future');
    }
  }
  return (

    <form className="lpd-form-container" onSubmit={handleSubmit}>
      <label>Set your last period date LPD</label>
      <div className="hor-views">
        <input type="date" onChange={e => setDate(new Date(e.target.value).toISOString())} />
        <button type="submit">send</button>
      </div>
    </form>
  );
}
