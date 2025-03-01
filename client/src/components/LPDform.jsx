import { useState } from "react";

export default function LPDform({ postDates }) {
  const [date, setDate] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(date);
    if (date) postDates(date);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Set your last period date LPD</p>
      <input type="date" onChange={e => setDate(new Date(e.target.value).toISOString())} />
      <button type="submit">send</button>
    </form>
  );
}
