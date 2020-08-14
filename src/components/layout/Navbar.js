import React from 'react';
import {Link} from 'react-router-dom';


const navbar = () => {
    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-danger p-2">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="navbar-brand text-white" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand text-white" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-light bg-danger mb-5">
                <Link className="navbar-brand text-white text-lg brand-text" to="/">
                    <i className="fas fa-video mx-3"/>
                    Movie finder
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars fa-2x"/>
                </button>
            </nav>
        </div>
    );
}

export default navbar;
