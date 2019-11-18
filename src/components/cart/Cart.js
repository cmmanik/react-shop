import React from 'react';
import './cart.scss'
import CusstomButton from '../button/CusstomButton';
const Cart = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CusstomButton>Go to Checkout</CusstomButton>
        </div>
    );
};

export default Cart;