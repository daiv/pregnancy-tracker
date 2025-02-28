export default function LPDform({ setlpd }) {
  return (
    <div>
      <p>Set your last period date LPD</p>
      <input type="date" onChange={e => {
        const dateString = new Date(e.target.value).toISOString();
        console.log(dateString);
        setlpd(dateString);
      }} />
    </div>
  );
}