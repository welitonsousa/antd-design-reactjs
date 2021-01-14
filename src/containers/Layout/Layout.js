import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { Component } from "react";
import { history } from "../../history";
import { MenuAvatar } from "../Layout/profile";
const { Header, Sider, Content } = Layout;

export class LayoutPrivate extends Component {
  state = {
    collapsed: false,
  };

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
          >
            <Menu.Item
              icon={<VideoCameraOutlined />}
              onClick={() => {
                history.push("/");
              }}
            >
              Teste
            </Menu.Item>
            <Menu.Item
              icon={<UserOutlined />}
              onClick={() => {
                history.push("/users");
              }}
            >
              Usuários
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="ant-row">
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => this.toggle(),
              }
            )}
            <MenuAvatar />
          </Header>

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
