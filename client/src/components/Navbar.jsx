import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [showAboutSubmenu, setShowAboutSubmenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="Fachri Property Group" className="logo-image" />
                    <span>FACHRI PROPERTY GROUP</span>
                </Link>
                <ul className="navbar-menu">
                    
                    <li 
                        className="navbar-item navbar-dropdown"
                        onMouseEnter={() => setShowAboutSubmenu(true)}
                        onMouseLeave={() => setShowAboutSubmenu(false)}
                    >
                        <Link to="/about" className="navbar-link">
                            TENTANG <span className="dropdown-arrow">▼</span>
                        </Link>
                        {showAboutSubmenu && (
                            <ul className="dropdown-menu">
                                <li><Link to="/about/history">Sejarah Perusahaan1</Link></li>
                                <li><Link to="/about/awards">Penghargaan</Link></li>
                                <li><Link to="/about/subsidiaries">Anak Perusahaan</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="navbar-item">
                        <Link to="/properties" className="navbar-link">PROPERTI</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/contact" className="navbar-link">HUBUNGI KAMI</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;