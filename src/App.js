import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
function App() {
  const[user, setuser] = useState([]);
  const handler = e =>{
    setuser(e.target.value);
  }
  return (
    <div className="container">
      <div className='text'>
        <h1>Onchange-React event handlers</h1>
      </div>
      <div className='input-text'>
         <input type='text' placeholder='user name' value={user} onChange={handler}></input>
      </div>
    </div>
  );
}

export default App;
