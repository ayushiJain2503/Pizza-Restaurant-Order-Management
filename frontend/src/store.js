import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { getAllPizzaReducer } from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducer';
import { userReducer, loginReducer } from './reducers/userReducer';
import { getUserOrdersReducer, getAllOrdersReducer } from './reducers/orderReducer';

const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    userReducer: userReducer,
    loginReducer: loginReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllOrdersReducer: getAllOrdersReducer,
})

const initialState = {
    cartReducer: {cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []},
    userReducer: {currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null}
};
const middleware = thunk;

const store= createStore(rootReducer, initialState, applyMiddleware(middleware));

export default store;