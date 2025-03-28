import { useState } from "react";

export default function LPDform({ postDates }) {
  const [date, setDate] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const lpDate = new Date(date);
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 7 * 41);
    if (date) {
      if (lpDate < Date.now() && lpDate > minDate) {
        postDates(date);
      } else alert('last period can not set the future or before 41 weeks');
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
