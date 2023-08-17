import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  return (
    <div className='container-app'>
      <h1 className='tituloLogin'>Inicia Sesión</h1>
      <LoginForm />
      <p className='text-app'>¿No tienes una cuenta? <Link to="/register" className='link-app'>Regístrate</Link></p>

    </div>
  )
}

export default LoginScreen