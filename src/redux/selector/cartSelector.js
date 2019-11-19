import { createSelector } from 'reselect';

const selectCart = state => state.cart; 

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartitemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumuledQuantity, cartItem) => accumuledQuantity + cartItem.quantiTy, 0)
)