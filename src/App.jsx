import './App.css';
import { Fragment } from 'react';
import Inicio from './Routes/Inicio';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Home from './Routes/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
