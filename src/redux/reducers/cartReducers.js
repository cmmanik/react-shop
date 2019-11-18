import { TOGGLE_CART } from "../actionType";

const initState = {
    hidden:true
};

const cartReducers = (state=initState, action) => {
    switch (action.type) {
        case TOGGLE_CART: 
            return {
                ...state,
                hidden:!state.hidden
            }
        default:
            return state;
    }
}

export default cartReducers;