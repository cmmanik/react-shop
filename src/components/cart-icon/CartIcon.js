import React from 'react';
import './cartIcon.scss'
import {ReactComponent as ShopingIcon } from '../../assets/cart.svg'
import {connect} from 'react-redux';
import { toogleCart } from '../../redux/actions/userAction';
import { selectCartitemCount } from '../../redux/selector/cartSelector';
import { createStructuredSelector } from 'reselect';
const CartIcon = ({toogleCart,itemCount }) => {
    console.log('total cart', itemCount)
    
    return (
        <div className="cart-icon" onClick={ toogleCart}>
            <ShopingIcon className="shopping-icon" />
    <span className="item-count">{itemCount ? itemCount : 0}</span>
        </div>
    );
};

const mapStateToProps=createStructuredSelector({
    itemCount:selectCartitemCount
})
const mapDispatchToProps = dispatch => ({
    toogleCart:() => dispatch(toogleCart())
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);