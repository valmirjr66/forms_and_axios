import { useState } from 'react';
import './App.css';
import SampleForm from './components/SampleForm';
import Visualization from './components/Visualization';
import { Toaster } from 'react-hot-toast';

function App() {
  const [operation, setOperation] = useState('view');

  const ChangeViewButton = ({ to, children }) => (
    <span className='Link' onClick={() => setOperation(to)}>
      {children}
    </span>
  )

  return (
    <div className="App">
      <Toaster />
      {operation === 'view' ?
        <>
          <ChangeViewButton to='insert'>Inserir usuário</ChangeViewButton>
          <Visualization />
        </>
        :
        <>
          <ChangeViewButton to='view'>Listar usuários</ChangeViewButton>
          <SampleForm />
        </>}
    </div>
  );
}

export default App;
