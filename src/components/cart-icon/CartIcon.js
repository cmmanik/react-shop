import React from 'react';
import './cartIcon.scss'
import {ReactComponent as ShopingIcon } from '../../assets/cart.svg'
import {connect} from 'react-redux';
import { toogleCart } from '../../redux/actions/userAction';
const CartIcon = ({toogleCart,cartItems }) => {
    console.log('total cart', cartItems)
    const totalCart = cartItems.reduce((acc, item) => acc + item.quantiTy , 0)
    return (
        <div className="cart-icon" onClick={ toogleCart}>
            <ShopingIcon className="shopping-icon" />
    <span className="item-count">{totalCart ? totalCart : 0}</span>
        </div>
    );
};

const mapDishpatchToProps=state=>({
    cartItems:state.cart.cartItems
})
const mapDispatchToProps = dispatch => ({
    toogleCart:() => dispatch(toogleCart())
})

export default connect(mapDishpatchToProps, mapDispatchToProps) (CartIcon);