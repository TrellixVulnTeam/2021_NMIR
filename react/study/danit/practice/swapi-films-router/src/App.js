import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Films from './components/Films';
import Layout from './components/Layout';
import FilmDetails from './dist/FilmDetails';

const App = () => {
  <div className='App'> 
    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<Films />} />
        <Route path='filmDetails' element={<FilmDetails />} />
      </Route >

    </Routes> 
  </div>


}

export default App;
