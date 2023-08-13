import React from 'react'
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
   navigate('/register');
  };
    return (
        <div>
            <h1>¡Bienvenid@ cibernauta!</h1>
            <p>¿Qué te gustaría hacer?</p>
            <button onClick={goToLogin}>Iniciar Sesión</button>
            <button onClick={goToRegister}>Registrarse</button>
        </div>
    )
}

export default Inicio