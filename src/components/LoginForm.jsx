import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { logIn } = useAuth()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

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
                setIsLoading(false)
                return;
            }
            logIn({ user: true })
            setError(null);
            setIsLoading(false)
            navigate('/characters');
            // Si no hay error, me redirige al home
        } catch (error) {
            setIsLoading(false)
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <label className="label-app" htmlFor="email">Correo Electrónico</label>
                <input
                    className="input-app"
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div className='input-container'>
                <label className="label-app" htmlFor="password">Contraseña</label>
                <input
                    className="input-app"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button className='boton-app' type="submit">{isLoading ? <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-green-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div> : "Iniciar Sesión"}</button>
            {error && <p className='error-message'>Usuario no registrado</p>}
        </form>
    )
}

export default LoginForm