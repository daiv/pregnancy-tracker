import { mock } from '../../../mocks/mock';
import Card from './Card/Card';
import './WeekCards.css';
import { FaBaby, FaHeartbeat } from 'react-icons/fa';
export default function WeekCards({ week }) {
  return (
    <div className='week-cards-container'>
      <Card title="BABY'S DEVELOPMENT:"
        icon={FaBaby}
      >
        {mock[week].fetus}
      </Card>
      <Card title="MOTHER'S JOURNEY:"
        icon={FaHeartbeat}
      >
        {mock[week].mother}
      </Card>
    </div>
  );
}