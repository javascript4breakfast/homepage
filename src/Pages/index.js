import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

export default function Pages(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
