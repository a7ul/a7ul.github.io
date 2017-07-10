import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import rssReducer from './rss.reducer';
import isMobileViewReducer from './isMobile.reducer';

export default combineReducers({
  router: routerReducer,
  rss: rssReducer,
  isMobileView: isMobileViewReducer
});
