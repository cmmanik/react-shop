import { SET_CURRENT_USER, TOGGLE_CART, ADD_CART_ITEM } from "../actionType"
// set current user
export const setCurrentUser = user => ({
    type:SET_CURRENT_USER,
    payload:user
})

// cart show and hide action
export const toogleCart = () => ({
    type:TOGGLE_CART
})
// add cart item 
export const addCardItem = item => ({
    type:ADD_CART_ITEM,
    payload:item
})