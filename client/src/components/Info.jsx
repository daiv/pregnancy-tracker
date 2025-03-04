import { mock } from '../../mocks/mock';
import './Info.css';
export default function Info({ week }) {
  return (

    <div className='info-container'>
      <div>
        <h3>Baby: </h3>
        <p>{mock[week].fetus}</p>
      </div>
      <div>
        <h3>Mother: </h3>
        <p>{mock[week].mother}</p>
      </div>




    </div>
  );
}