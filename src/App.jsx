import './App.css';
import { Fragment } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes'
import 'materialize-css/dist/css/materialize.min.css';
import { useAuth } from './context/authContext';

function App() {
  const { user } = useAuth()
  return (
    <Fragment>
      <Routes>
        {user ? privateRoutes.map(({ key, path, component }) => <Route key={key} path={path} element={component} />)
          : publicRoutes.map(({ key, path, component }) => <Route key={key} path={path} element={component} />)}
      </Routes>
    </Fragment>
  );
}

export default App;
