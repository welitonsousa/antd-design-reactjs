import { Avatar } from "antd";
import Axios from "axios";
import React from "react";

const usersData = () => [
  {
    fullName: "",
    city: "",
    state: "",
    email: "",
    picture: "",
    key: "",
  },
];

const columns = () => [
  {
    title: "",
    dataIndex: "picture",
    render: (linkPicture) => <Avatar src={linkPicture} />,
  },
  {
    title: "Nome",
    dataIndex: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Cidade",
    dataIndex: "city",
  },
  {
    title: "Estado",
    dataIndex: "state",
  },
];

async function getUsers () {
  const res = await Axios.get(
    "https://randomuser.me/api?page=1&results=20&seed=abc"
  );
  
  return res.data.results.map((user) => ({
    ...user,
    fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
    city: user.location.city,
    state: user.location.state,
    email: user.email,
    picture: user.picture.large,
    key: user.login.uuid,
  }));
};

export { usersData, columns, getUsers };

