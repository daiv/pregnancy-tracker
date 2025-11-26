import './Card.css';
export default function Card({ title, content }) {

  return <div>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
}