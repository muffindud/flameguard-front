import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                FlameGuard
            </div>
            <div className="navbar-menu">
            <ul className="navbar-links">
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#future-features">Future Features</a></li>
            </ul>
            <button className="navbar-button">Get Started</button>
            </div>
        </nav>
    );
}

export default Navbar;
