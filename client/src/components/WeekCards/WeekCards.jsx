import { mock } from '../../../mocks/mock';
import Card from './Card/Card';
import './WeekCards.css';
export default function WeekCards({ week }) {
  return (
    <div className='info-container'>
      <Card title="Baby:" content={mock[week].bebe} />
      <Card title="Mother:" content={mock[week].madre} />
    </div>
  );
}