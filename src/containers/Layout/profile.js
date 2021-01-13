import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import React, { Component } from "react";
import { history } from "../../history";
import { logout } from "../../utils/auth";
import "../Layout/Layout.css";
export class MenuAvatar extends Component {
  render() {
    return (
      <div className="row-image-profile">
        <Avatar icon={<UserOutlined/>}/>
        <Dropdown overlay={menu}>
          <h4>
            {localStorage.getItem("username")} <DownOutlined />
          </h4>
        </Dropdown>
      </div>
    );
  }
}
const menu = (
  <Menu>
    <Menu.Item
      onClick={() => {
        logout();
        history.push("/login");
      }}
    >
      <p>sair</p>
    </Menu.Item>
  </Menu>
);
