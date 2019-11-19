import React from 'react';
import './cart.scss'
import CusstomButton from '../button/CusstomButton';
import CartItem from './CartItem';
import { connect} from 'react-redux'
import { selectCartItems } from '../../redux/selector/cartSelector';
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
    carrItemList : selectCartItems(state)
})
export default connect(mapDishpatchToProps) (Cart);