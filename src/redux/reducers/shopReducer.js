import { ADD_COLLECTION } from "../actionType";

const INIT_STATE = {
     collections : null
}

const shopReducer = (state = INIT_STATE, action) => {
   switch (action.type) {
     case ADD_COLLECTION: 
     return {
       ...state,
       collections:action.payload
     }
       default:
           return state;
   }
};

export default shopReducer;