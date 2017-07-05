import {UPDATE_RSS_FEED} from '../actions/index.actions';

export default function rssReducer (state = {}, action) {
  switch (action.type) {
  case UPDATE_RSS_FEED: {
    const rss = action.payload;
    return rss;
  }
  default:
    return state;
  }
}
