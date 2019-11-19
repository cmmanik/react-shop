import React from 'react';
import './cart.scss'
import CusstomButton from '../button/CusstomButton';
import CartItem from './CartItem';
import { connect} from 'react-redux'
const Cart = ({carrItemList}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {carrItemList.map(item => <CartItem key={item.id} item={item} /> )}
            </div>
            <CusstomButton>Go to Checkout</CusstomButton>
        </div>
    );
};
const mapDishpatchToProps = state => ({
    carrItemList : state.cart.cartItems
})
export default connect(mapDishpatchToProps) (Cart);