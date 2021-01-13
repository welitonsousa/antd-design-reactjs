import React from "react";
import { Redirect, Route } from "react-router";
import { isLogged } from "../utils/auth";

const Public = (props) =>
  !isLogged() ? <Route {...props} /> : <Redirect to="/" />;

export default Public;
