import React from 'react';
import { Route, Switch } from 'react-router';

import routeList from './routeList';
import componentList from './componentList';

export default () => (
  <Switch>
    <Route exact strict={false} path={routeList.home} component={componentList.home} />
  </Switch>
);
