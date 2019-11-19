import React from 'react';
import './carrItem.scss'
const CartItem = (item) => {
    const {name, imageUrl, price, quantiTy} =item.item;
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="img"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantiTy} x {price} </span>
            </div>
        </div>
    );
};

export default CartItem;