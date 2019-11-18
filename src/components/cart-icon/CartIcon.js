import React from 'react';
import './cartIcon.scss'
import {ReactComponent as ShopingIcon } from '../../assets/cart.svg'
import {connect} from 'react-redux';
import { toogleCart } from '../../redux/actions/userAction';
const CartIcon = ({toogleCart}) => {
    return (
        <div className="cart-icon" onClick={ toogleCart}>
            <ShopingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toogleCart:() => dispatch(toogleCart())
})

export default connect(null, mapDispatchToProps) (CartIcon);