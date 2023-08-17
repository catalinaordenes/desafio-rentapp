import React from 'react'
import { useNavigate } from 'react-router-dom';

const InicioScreen = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };
  return (
    <div className='container-app'>
      <h1 className='tituloInicio'>¡Bienvenid@ cibernauta!</h1>
      <p className='bajadaInicio'>¿Qué te gustaría hacer?</p>
      <button className='boton-app' onClick={goToLogin}>Iniciar Sesión</button>
      <button className='boton-app' onClick={goToRegister}>Registrarse</button>
    </div>
  )
}

export default InicioScreen