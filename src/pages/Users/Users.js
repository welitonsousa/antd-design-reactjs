import { Avatar, Table } from "antd";
import Axios from "axios";
import React, { Component } from "react";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ fullName: "", city: "", state: "", email: "", picture: "", key: "" }],
      values: [
        {
          title: "",
          dataIndex: "picture",
          key: "picture",
          render: (linkPicture) => <Avatar src={linkPicture} />,
        },
        {
          title: "Nome",
          dataIndex: "fullName",
          key: "fullName",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Cidade",
          dataIndex: "city",
          key: "city",
        },
        {
          title: "Estado",
          dataIndex: "state",
          key: "state",
        },
      ],
    };
    this.getUsers();
  }

  async getUsers() {
    const res = await Axios.get(
      "https://randomuser.me/api?page=1&results=20&seed=abc"
    );
    this.setState({
      users: res.data.results.map((user) => ({
        ...user,
        fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
        city: user.location.city,
        state: user.location.state,
        email: user.email,
        picture: user.picture.large,
        key: user.login.uuid
      })),
    });
  }

  render() {
    return <Table onChange={(e)=>{console.log(e)}} className="table" dataSource={this.state.users} columns={this.state.values}/>;
  }
}
