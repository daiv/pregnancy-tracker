import { mock } from '../../mocks/mock';
import './Info.css';
export default function Info({ week }) {

  return (

    <div className='info-container'>
      <div>
        <h3>baby: </h3>
        <p>{mock[week].fetus}</p>
        <h3>mother: </h3>
        <p>{mock[week].mother}</p>
      </div>



    </div>
  );
}