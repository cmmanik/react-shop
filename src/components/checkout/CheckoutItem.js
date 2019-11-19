import React from 'react';
import './checkoutItem.scss'
import { removeCartItem, addCardItem, removeSingle } from '../../redux/actions/userAction';
import {connect} from 'react-redux'
const CheckoutItem = ({item, removeCartItem, removeSingle, addCardItem}) => {
    const {name, quantiTy, price, imageUrl} = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="img"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeSingle(item)}>&#10094;</div>
                <div className="value"> {quantiTy}</div>
                <div className="arrow" onClick={() => addCardItem(item)} >&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeCartItem(item)} >&#10005;</div>
        </div>
    );
};

const mapDishPatchToprops = dispatch => ({
    removeCartItem:item=>dispatch(removeCartItem(item)),
    addCardItem:item => dispatch(addCardItem(item)),
    removeSingle: item => dispatch(removeSingle(item))
})
export default connect(null, mapDishPatchToprops)(CheckoutItem);