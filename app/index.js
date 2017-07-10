import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './App.container';
import {initStore} from './state/store';
import {Provider} from 'react-redux';

const store = initStore({});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
