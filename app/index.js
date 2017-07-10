import Router from './routes/router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {initStore} from './state/store';
import contributions from './assets/json/contributions.json';
import projects from './assets/json/projects.json';

console.log('to test,contributions, projects', contributions, projects);

const store = initStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
