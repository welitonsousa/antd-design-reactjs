import React from "react";
import { Redirect, Route } from "react-router";
import { isLogged } from "../utils/auth";

const PrivateRoute = (props) =>
  isLogged() ? (
    <>
      <div>
        <h1>Layout</h1>
        <Route {...props} />
      </div>
    </>
  ) : (
    <Redirect to="/login" />
  );

export default PrivateRoute;
