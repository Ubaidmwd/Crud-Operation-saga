// import {createStore} from 'redux';
import { configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './Reducers/rootReducer'
import productSaga from './middleware/productSaga';
import createSagaMiddleware from 'redux-saga';


const  sagaMiddleware=createSagaMiddleware();

const store=configureStore({
    reducer:rootReducer,
    middleware: ()  => [ sagaMiddleware]
} 
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

sagaMiddleware.run(productSaga)
export default store;
