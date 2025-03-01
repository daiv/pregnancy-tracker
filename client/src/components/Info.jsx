import { mock } from '../../mocks/mock';
import Baby from './Baby';
import './Info.css';
export default function Info({ week }) {

  return (

    <div className='info-container'>
      <div>
        <h3>baby: </h3>
        <p>{mock[week - 1].fetus}</p>
        <h3>mother: </h3>
        <p>{mock[week - 1].mother}</p>
      </div>



    </div>
  );
}