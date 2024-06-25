import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">Lounge 64</a>
                <ul className="nav-menu">
                <li className="nav-item">
                        <Link  className="nav-links" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#caro" className="nav-links">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a href="#service" className="nav-links">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#todo" className="nav-links">Todo</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to='/signup'>Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
