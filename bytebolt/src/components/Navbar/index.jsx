// Navigation.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <nav className={isSticky ? 'sticky' : ''}>
            <ul>
                <li><Link to="/" onClick={() => scrollToSection('home')}>Home</Link></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
                <li><a href="#" onClick={() => scrollToSection('contact')}>Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
