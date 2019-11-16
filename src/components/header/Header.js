import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './header.scss'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase';
const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {currentUser ? (<div className="option" onClick={() => auth.signOut()}>Sign Out</div>) : 
                    <Link className="option" to="/sign">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Header;