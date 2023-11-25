import {applyMiddleware} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer
    ,preloadedState:initialState
    ,devTools: true
    ,middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
    
    //,middleware: composeWithDevTools(applyMiddleware(...middleware))
});


export default store;