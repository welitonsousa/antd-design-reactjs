import React, { Component } from "react";
import { history } from "../history";
import { login } from "../utils/auth";


const handleLogin = () => {
  login()
  history.push('/')
}

export class Login extends Component {
  render() {
    return (
      <>
        <h1>Login</h1>
        <button onClick={handleLogin}>Login</button>
      </>
    );
  }
}
