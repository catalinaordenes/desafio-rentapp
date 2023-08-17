import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from 'react-router-dom'


const RegisterScreen = () => {
  return (
    <div className='container-app'>
      <h1 className='tituloRegistro'>Regístrate</h1>
      <RegisterForm />
      <p className='text-app'>¿Ya tienes una cuenta? <Link to="/login" className='link-app'>Inicia Sesión</Link></p>
    </div>
  )
}

export default RegisterScreen