import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {URLS} from "./urls";

export const Routes = () => {
  return (
    <Switch>
      <Route path={URLS.DEFAULT} exact render={() => <h1>Home page</h1>} />
      <Route
        path={URLS.ARTICLE}
        render={(props) => <h1>Some cool article</h1>}
      />
      <Redirect from="*" to={URLS.DEFAULT} />
    </Switch>
  );
};
