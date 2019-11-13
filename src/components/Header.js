import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg'
import './header.scss'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Header;