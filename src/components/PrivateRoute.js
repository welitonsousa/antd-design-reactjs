import React from "react";
import { Redirect, Route } from "react-router";
import { LayoutPrivate } from "../containers/Layout/Layout";
import "../containers/Layout/Layout.css";
import { isLogged } from "../utils/auth";

const PrivateRoute = (props) =>
  isLogged() ? (
    <LayoutPrivate className="body">
      <Route {...props} />
    </LayoutPrivate>
  ) : (
    <Redirect to="/login" />
  );

export default PrivateRoute;
