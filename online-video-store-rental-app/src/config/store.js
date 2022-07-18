import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';

import cartReducer from "../features/cart/reducer";
import { authentication, registration } from "../features/authenticate";
import { alert } from '../features/alert/alert.reducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    authentication: authentication,
    registration: registration,
    alert: alert
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
    // other store enhancers if any
    );

const store = createStore(
    rootReducer, 
    enhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // applyMiddleware(
    //     thunkMiddleware
    // )
);

export default store;