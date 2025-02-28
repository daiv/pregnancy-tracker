import { mock } from '../../mocks/mock';
import Baby from './Baby';
import './Info.css';
export default function Info({ week}) {

  return (

    <div className='info-container'>
      <div>
        <h1>baby: </h1>
        <p>{mock[week - 1].fetus}</p>
        <h1>mother: </h1>
        <p>{mock[week - 1].mother}</p>
      </div>
     


    </div>
  );
}