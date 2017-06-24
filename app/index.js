import Router from './routes/router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {initStore} from './state/store';

const store = initStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
