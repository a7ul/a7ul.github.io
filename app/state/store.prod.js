import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers/root.reducer';
import {reduxRouterMiddleware} from '../routes/router';

const enhancerList = [];

const enhancer = compose(applyMiddleware(thunk, promise, reduxRouterMiddleware), ...enhancerList);

export default (initialState = {}) => createStore(rootReducer, initialState, enhancer);
