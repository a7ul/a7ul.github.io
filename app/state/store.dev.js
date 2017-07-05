import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers/root.reducer';
import {reduxRouterMiddleware} from '../routes/router';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, promise, reduxRouterMiddleware)
);

export default (initialState = {}) => createStore(rootReducer, initialState, enhancer);
