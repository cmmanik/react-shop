import { createSelector } from 'reselect';

const selectCart = state => state.cart; 

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
// get total product
export const selectCartitemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumuledQuantity, cartItem) => accumuledQuantity + cartItem.quantiTy, 0)
)
// get total price 
export const totalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumuledQuantity, cartItem) => accumuledQuantity + cartItem.quantiTy * cartItem.price , 0)
)