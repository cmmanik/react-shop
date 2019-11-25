import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import {persistStore} from 'redux-persist'
const middlewares = [];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);// // export default {store, peristStor};



