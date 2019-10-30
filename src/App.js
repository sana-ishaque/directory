import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Persons from './components/Persons/Persons';
import BckdImage from './assets/team-2.gif';
import Typist from 'react-typist';
import './App.css'


function App() {
  return (
    <div className="App">
      <Typist>
        <img src={BckdImage} />
        <h2>Person List</h2>
        <Typist.Backspace count={11} delay={200} />
        <h1 className='avgTypingDelay'>Person List</h1>
        </Typist>
    <Persons />
    </div >
  );
}

export default App;
