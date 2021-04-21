import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

export default props => {

  const Page1 = () => <h1>Page1</h1>
    const Page2 = () => <h1>Page2</h1>

  return (
      <div>
        <div>
            <NavLink to="/app">App Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/app/page1">App Page1</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/app/page2">App Page2</NavLink>&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;<a href="/"><b>Go to parent folder</b></a>
            &nbsp;&nbsp;&nbsp;<a href="/auth"><b>Go to /auth subfolder</b></a>
        </div>

        <Switch>
          <Route
              exact
              path="/app"
              render={props => <Home name="You are in /app subfolder" {...props} />}
          />
          <Route path="/app/page1" component={Page1} />
          <Route path="/app/page2" component={Page2} />
          <Route component={NotFound} />
        </Switch>
      </div>
  );
};