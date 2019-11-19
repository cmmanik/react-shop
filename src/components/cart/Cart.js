import React from 'react';
import './cart.scss'
import CusstomButton from '../button/CusstomButton';
import CartItem from './CartItem';
import { connect} from 'react-redux'
import { selectCartItems } from '../../redux/selector/cartSelector';
import {withRouter} from 'react-router-dom'
import {createStructuredSelector } from 'reselect'
import {toogleCart} from '../../redux/actions/userAction'
const Cart = ({carrItemList, history, toogleCart}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {carrItemList.length ? carrItemList.map(item => <CartItem key={item.id} item={item} /> ) : 
                    <span className="empty-cart">Cart is Empty !</span>
                }
            </div>
            <CusstomButton onClick={() => {toogleCart(); history.push('/checkout')}} >Go to Checkout</CusstomButton>
        </div>
    );
};
const mapStateToProps = createStructuredSelector ({
    carrItemList : selectCartItems
})
const mapDishPatchToprops = dispatch => ({
    toogleCart:() => dispatch(toogleCart())
})
export default withRouter(connect(mapStateToProps, mapDishPatchToprops) (Cart));