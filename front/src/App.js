import { useState } from 'react';
import './App.css';
import SampleForm from './components/SampleForm';
import Visualization from './components/Visualization';
import { Toaster } from 'react-hot-toast';

function App() {
  const [operation, setOperation] = useState('view');

  return (
    <div className="App">
      <Toaster />
      {operation === 'view' ?
        <>
          <span className='Link' onClick={() => setOperation('insert')}>
            Inserir usuário
          </span>
          <Visualization />
        </>
        :
        <>
          <span className='Link' onClick={() => setOperation('view')}>
            Listar usuários
          </span>
          <SampleForm />
        </>}
    </div>
  );
}

export default App;
