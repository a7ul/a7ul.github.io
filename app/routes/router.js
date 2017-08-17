import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerMiddleware, push, goBack} from 'react-router-redux';

import Home from '../pages/Home/Home.page';
import Experiments from '../pages/Experiments/Experiments.page';

const history = createHistory();
const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/experiments' component={Experiments}/>
    </div>
  </ConnectedRouter>
);

export default Router;
export const reduxRouterMiddleware = routerMiddleware(history);
export const routerActions = {push, goBack};
