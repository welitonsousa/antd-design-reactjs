import React from "react";
import { Redirect, Route } from "react-router";
import { isLogged } from "../utils/auth";

const PrivateRoute = (props) =>
  isLogged() ? <Route {...props} /> : <Redirect to="/login" />;

export default PrivateRoute;
