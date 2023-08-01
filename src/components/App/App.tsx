import React from 'react';
import {Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Search from '../Search/Search';
import Results from '../Results/Results'

function App() {
  return (
    <>
      <Search/>
      <main>
        <Routes>
          <Route path='/' element={<Results/>}/>
          <Route path='/search/:query/:page'/>
          <Route path='/books/:id'/>
          <Route path='/to-read'/>
          <Route path='*'/>
        </Routes>
      </main>
    </>
  );
}

export default App;