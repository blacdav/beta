import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Connect from './pages/Connect';

function App() {
  return (
    <Routes>
      <Route path='/'element={<Landing />} />
      <Route path='Signup'element={<Signup />} />
      <Route path='Login'element={<Login />} />
      <Route path='Connect'element={<Connect />} />
    </Routes>
  );
}

export default App;