import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux';
import store from "./store"
import { BrowserRouter} from "react-router-dom";
import { ToastContainer } from "react-toastify";
store.subscribe(() => console.log(store.getState()));
ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <BrowserRouter>
    <App />
    <ToastContainer />
    </BrowserRouter>
    </Provider>
  
)
