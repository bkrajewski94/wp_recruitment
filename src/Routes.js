import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <h1>Home page</h1>} />
      <Route
        path="/article/:articleId/"
        render={(props) => <h1>Some cool article</h1>}
      />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
