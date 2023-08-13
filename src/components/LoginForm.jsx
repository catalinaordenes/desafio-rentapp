import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://reqres.in/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password,
              }),
            });
      
            if (!response.ok) {
              const data = await response.json();
              setError(data.error);
              return;
            }
      
            setError(null);
                navigate('/home');
            // Si no hay error, me redirige al home
          } catch (error) {
            console.error('Error al iniciar sesión:', error);
          }
        };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
      {error && <p>Usuario no registrado</p>}
    </form>
  )
}

export default LoginForm