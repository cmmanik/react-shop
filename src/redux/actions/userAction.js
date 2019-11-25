import { SET_CURRENT_USER, TOGGLE_CART, ADD_CART_ITEM, CLEAR_CART_ITEM, ITEM_REMOVE, ADD_COLLECTION } from "../actionType"
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
// REMOVE SIGNLE QUANTITY
export const removeSingle = item => ({
    type:ITEM_REMOVE,
    payload:item
})
// REMOVE CART ITEM 
export const removeCartItem = (item) => ({
    type:CLEAR_CART_ITEM,
    payload:item
});


// fetch shop collection form firebase 
export const setCollection = collections => ({
    type:ADD_COLLECTION,
    payload:collections
})