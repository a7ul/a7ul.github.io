import {createAction} from 'redux-actions';

export const UPDATE_RSS_FEED = 'UPDATE_RSS_FEED';
export const SET_MOBILE_VIEW = 'SET_MOBILE_VIEW';

export const updateRSSFeed = createAction(UPDATE_RSS_FEED);
export const setMobileView = createAction(SET_MOBILE_VIEW);
