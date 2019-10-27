import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Persons from './components/Persons/Persons';
import BckdImage from './assets/team-2.gif'


function App() {
  return (
    <div className="App">
      <img src={BckdImage} />
      <Persons />
    </div>
  );
}

export default App;
