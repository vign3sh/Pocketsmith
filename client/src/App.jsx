import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {RouterProvider} from "react-router-dom";
import { getRouter } from "./components/GetRouter";
import './assets/css/App.css';

const App1 = () =>{
    var BACKGROUND_COLOR = "#202020";
    return(
        <Provider store={store}>
            <RouterProvider router={getRouter(store)} />
        </Provider>
    );
}

export default App1;

  