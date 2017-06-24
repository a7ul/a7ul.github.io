import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers/root.reducer';
import {reduxRouterMiddleware} from '../routes/router';

const enhancer = applyMiddleware(thunk, promise, reduxRouterMiddleware);

export default (initialState = {}) => createStore(rootReducer, initialState, enhancer);
