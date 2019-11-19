import React from 'react';
import './checkoutpage.scss'
import { connect} from 'react-redux'
import CheckoutItem from '../components/checkout/CheckoutItem';
import {createStructuredSelector} from 'reselect'
import { selectCartItems, totalPrice } from '../redux/selector/cartSelector';
const CheckoutPage = ({cartitems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartitems.map(item => <CheckoutItem key={item.id} item={item} /> )}
            <div className="total">
                <span>Total : ${total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartitems:selectCartItems,
    total:totalPrice
})

export default connect(mapStateToProps)(CheckoutPage);