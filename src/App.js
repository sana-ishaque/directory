import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Persons from './components/Persons/Persons';


function App() {
  return (
    <div className="App">
      <h1>Person List</h1>
      <Persons />
    </div>
  );
}

export default App;
