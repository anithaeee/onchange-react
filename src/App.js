import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
function App() {
  const[user, setuser] = useState([]);
  return (
    <div className="container">
      <div className='text'>
b         <h1>Onchange-React event handlers</h1>
      </div>
      <div className='input-text'>
         <InputText></InputText>
         <Button>Click Me</Button>
      </div>
    </div>
  );
}

export default App;
