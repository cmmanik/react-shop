import {combineReducers} from 'redux';
import userReducer from './userReducer';
import cartReducers from './cartReducers';


const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducers
})

export default rootReducer;