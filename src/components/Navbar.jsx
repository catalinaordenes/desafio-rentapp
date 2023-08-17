import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css'; 
import { useAuth } from '../context/authContext';

const Navbar = () => {
    const { logOut } = useAuth()
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        const options = {};
        M.Sidenav.init(elems, options);
    }, []);

    return (
        <div>
            <nav>
                <div className="nav-wrapper custom-green">
                    <Link to="/characters" className="brand-logo">Rick & Morty Pedia</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/characters">Personajes</Link></li>
                        <li><Link to="/episodes">Episodios</Link></li>
                        <li style={{ paddingRight: "20px" }}><Link to="/locations">Locaciones</Link></li>
                        <li style={{ paddingRight: "50px" }}><button class="waves-effect waves-light btn" onClick={() => logOut()}>Cerrar Sesión</button></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/characters">Personajes</Link></li>
                <li><Link to="/episodes">Episodios</Link></li>
                <li><Link to="/locations">Locaciones</Link></li>
                <li><Link onClick={() => logOut()}>Cerrar Sesión</Link></li>

            </ul>
        </div>
    );
}

export default Navbar;
