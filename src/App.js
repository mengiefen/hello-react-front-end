import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Counter } from "./features/counter/Counter";
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
