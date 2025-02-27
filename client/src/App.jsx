import './App.css'
import { useState } from 'react';
import Info from './Info';
import Form from './Form';
import Baby from './Baby';

function App() {
  const [week, setWeek] = useState(2);
  const currentWeek = 16;
  return (
    <div className='app-container'>
      <Info week={week} />
      <Baby id="baby" week={week} setWeek={setWeek} currentWeek={currentWeek} />
      <Form />

    </div>
  );

}

export default App
