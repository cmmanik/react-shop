import {combineReducers} from 'redux';

import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './userReducer';
import cartReducers from './cartReducers';
import directoryReducer from './directoryReducer';
import shopReducer from './shopReducer';


const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducers,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig, rootReducer)