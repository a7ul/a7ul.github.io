import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import rssReducer from './rss.reducer';

export default combineReducers({
  router: routerReducer,
  rss: rssReducer
});
