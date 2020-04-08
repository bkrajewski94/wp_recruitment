import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {URLS} from "./urls";
import {Dashboard} from "./containers/Dashboard/Dashboard";

export const Routes = () => {
  return (
    <Switch>
      <Route path={URLS.DEFAULT} exact render={(props) => <Dashboard {...props}/>} />
      <Route
        path={URLS.ARTICLE}
        render={(props) => <h1>Some cool article</h1>}
      />
      <Redirect from="*" to={URLS.DEFAULT} />
    </Switch>
  );
};
