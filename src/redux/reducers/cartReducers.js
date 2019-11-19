import { TOGGLE_CART, ADD_CART_ITEM } from "../actionType";
import { addCardItem } from "../../components/utils/addcardItem";

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
        default:
            return state;
    }
}

export default cartReducers;