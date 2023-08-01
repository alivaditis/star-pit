import React from 'react';
import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'/>
        <Route path='/search/:query/:page'/>
        <Route path='/books/:id'/>
        <Route path='/to-read'/>
        <Route path='*'/>
      </Routes>
    </>
  );
}

export default App;
