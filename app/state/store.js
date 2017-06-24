import devStore from './store.dev';
import prodStore from './store.prod';

export const initStore = (initialState = {}) => {
  if (process.env.NODE_ENV === 'development') {
    return devStore(initialState);
  }
  return prodStore(initialState);
};
