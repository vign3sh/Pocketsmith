import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {RouterProvider} from "react-router-dom";
import { getRouter } from "./components/GetRouter";

const App1 = () =>{

    return(
        <Provider store={store}>
            <RouterProvider router={getRouter(store)} />
        </Provider>
    );
}

export default App1;

  