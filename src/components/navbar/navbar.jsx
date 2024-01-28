import React from 'react';
import './navbar.css';


import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav>
            <a href="#" className="logo">
                <img src={logo} alt="clogo" />
                <span>CLAIR</span>
            </a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
