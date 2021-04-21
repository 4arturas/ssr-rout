import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

export default props => {

  const Page1 = () => <h1>Page1</h1>
  const Page2 = () => <h1>Page2</h1>


  return (
      <div style={{backgroundColor:'whitesmoke'}}>
        <div>
            <NavLink to="/auth">Auth Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/auth/page1">Auth Page1</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/auth/page2">Auth Page2</NavLink>&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;<a href="/"><b>Go to parent folder</b></a>
            &nbsp;&nbsp;&nbsp;<a href="/app"><b>Go to /app subfolder</b></a>
        </div>

        <Switch>
          <Route
              exact
              path="/auth"
              render={props => <Home name="You are in /auth subfolder" {...props} />}
          />
          <Route path="/auth/page1" component={Page1} />
          <Route path="/auth/page2" component={Page2} />
          <Route component={NotFound} />
        </Switch>
      </div>
  );
};