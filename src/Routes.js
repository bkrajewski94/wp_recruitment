import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { URLS } from './urls';
import { Dashboard } from './containers/Dashboard/Dashboard';
import { Article } from './containers/Article/Article';

export const Routes = () => {
  return (
    <Switch>
      <Route
        path={URLS.DEFAULT}
        exact
        render={(props) => <Dashboard {...props} />}
      />
      <Route path={URLS.ARTICLE} render={(props) => <Article {...props} />} />
      <Redirect from="*" to={URLS.DEFAULT} />
    </Switch>
  );
};
