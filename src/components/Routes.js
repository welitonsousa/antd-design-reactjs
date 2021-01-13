import React, { Component } from "react";
import { Route, Router, Switch } from "react-router";
import { history } from "../history";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login/Login";
import { NotFound } from "../pages/NotFound";
import { Users } from "../pages/Users/Users";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


export class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/users" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
