import {SET_MOBILE_VIEW} from '../actions/index.actions';

export default function isMobileView (state = false, action) {
  switch (action.type) {
  case SET_MOBILE_VIEW: {
    return action.payload;
  }
  default:
    return state;
  }
}
