import { useState } from "react";

export default function LPDform({ postDates }) {
  const [date, setDate] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(typeof date);
    if (date) {
      if (new Date(date) < Date.now()) {
        postDates(date);
      } else alert('hola');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Set your last period date LPD</p>
      <input type="date" onChange={e => setDate(new Date(e.target.value).toISOString())} />
      <button type="submit">send</button>
    </form>
  );
}
