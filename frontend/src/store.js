import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {productListReducer, productDetailReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducers';



const cartItems = Cookie.getJSON("cartItems") || [];

console.log(cartItems);

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer
})
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;
