import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../containers/Login';
import Home from './Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  </main>
);

export default Main;
