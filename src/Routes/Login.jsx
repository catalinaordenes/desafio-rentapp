import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Inicia Sesión</h1>
      <LoginForm/>
     <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
   
    </div>
  )
}

export default Login