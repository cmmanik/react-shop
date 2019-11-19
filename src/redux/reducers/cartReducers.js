import { TOGGLE_CART, ADD_CART_ITEM, CLEAR_CART_ITEM, ITEM_REMOVE } from "../actionType";
import { addCardItem, removeCardItem } from "../../components/utils/addcardItem";

const initState = {
    hidden:true,
    cartItems:[]
};

const cartReducers = (state=initState, action) => {
    switch (action.type) {
        case TOGGLE_CART: 
            return {
                ...state,
                hidden:!state.hidden
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems:addCardItem(state.cartItems, action.payload)
            }
        case CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(item => item.id.toString() !== action.payload.id.toString())
            }
        case ITEM_REMOVE:
            return {
                ...state,
                cartItems:removeCardItem(state.cartItems, action.payload)
            }  
        default:
            return state;
    }
}

export default cartReducers;