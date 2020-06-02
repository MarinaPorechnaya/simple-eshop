import React from 'react';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import reducer from './redux/combineReducers'
import {getAllProducts, getAllCategories} from './redux/actions'

const middleware = [ thunk ];
/*
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)
*/
// @ts-ignore
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
// @ts-ignore
const devtoolMiddleware = ext && process.env.NODE_ENV === 'development' ? ext() : f => f;

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleware),
        devtoolMiddleware
    )
);

store.dispatch(getAllCategories())
store.dispatch(getAllProducts())
//store.dispatch(getAllCategories())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)