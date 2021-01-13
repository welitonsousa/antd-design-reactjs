import React, { Component } from "react";
import { history } from "../history";
import { logout } from "../utils/auth";


const handleLogout = () => {
  logout()
  history.push('/login')
}

export class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }
}
