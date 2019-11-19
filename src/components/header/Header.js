import React from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './header.scss'
import {createStructuredSelector} from 'reselect'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase';
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/CartIcon';
import Cart from '../cart/Cart';
import { selectCurrentUser } from '../../redux/selector/userSelector';
import { selectCartHidden } from '../../redux/selector/cartSelector';

const Header = (props) => {
    const {currentUser, cart} = props;
    console.log('header ', props)
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {currentUser ? (<div className="option signout"
                onClick={() => auth.signOut()}>Sign Out</div>) : 
                <Link className="option" to="/sign">Login</Link>
                }
                <CartIcon/>
            </div>
            {cart ? null : <Cart/> }
            
        </div>
    );
};

const mapStateToProps =createStructuredSelector ({
    currentUser:selectCurrentUser,
    cart:selectCartHidden
})
export default connect(mapStateToProps)(Header);