import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware, push, goBack} from 'react-router-redux';

import Home from '../pages/Home/Home.page';

const history = createHistory();
const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route path='/' component={Home}/>
      <Route path='/home' component={Home}/>
    </div>
  </ConnectedRouter>
);

export default Router;
export const reduxRouterMiddleware = routerMiddleware(history);
export const routerActions = {push, goBack};
