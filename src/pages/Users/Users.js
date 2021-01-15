import { DeleteOutlined } from "@ant-design/icons";
import { Button, Image, Input, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { columns, getUsers, usersData } from "./data";
import "./Users.css";

const Users = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleCreateUser, setModalVisibleCreateUser] = useState(false);

  const [users, setUsers] = useState(usersData);
  const [valuesTable] = useState(columns);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  async function getData() {
    const listUsers = await getUsers();
    setUsers(listUsers);
  }

  useEffect(() => {
    getData();
  }, []);

  const showModal = (index) => {
    setCity(users[index].city);
    setState(users[index].state);
    setUserName(users[index].fullName);
    setPicture(users[index].picture);
    setModalVisible(true);
  };

  const hideModal = () => {
    setUserName("");
    setCity("");
    setState("");
    setEmail("");
    setPicture("");
    setModalVisible(false);
    setModalVisibleCreateUser(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setModalVisibleCreateUser(true);
        }}
      >
        +
      </Button>
      <Table
        className="table"
        dataSource={users}
        columns={valuesTable}
        onRow={(user, index) => {
          return {
            onClick: () => {
              if (!!user.fullName) {
                setCurrentUserIndex(index);
                showModal(index);
              }
            },
          };
        }}
      />
      <Modal
        title={users[currentUserIndex].fullName}
        visible={isModalVisible}
        onCancel={hideModal}
        onOk={hideModal}
      >
        <Image src={picture}/>
        <Input
          value={userName}
          placeholder="usuário"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <Input
          value={city}
          placeholder="Cidade"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <Input
          value={state}
          placeholder="Estado"
          onChange={(event) => {
            setState(event.target.value);
          }}
        />
        <div>
          <Button
            type="primary"
            onClick={() => {
              if (!!userName) {
                users[currentUserIndex].fullName = userName;
              }
              if(!!city){
                users[currentUserIndex].city = city;
              }
              if (!!state){
                users[currentUserIndex].state = state;
              }

                setUsers(users);
                hideModal();
              
            }}
          >
            Salvar
          </Button>
          <Button
            onClick={() => {
              users.slice( currentUserIndex, 1);
              setUsers(users);
              hideModal();
            }}
            type="primary"
            danger
          >
            <DeleteOutlined />
          </Button>
        </div>
      </Modal>

      <Modal visible={isModalVisibleCreateUser} onCancel={hideModal}>
        <Input
          placeholder="usuário"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <Input
          placeholder="Cidade"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <Input
          placeholder="Estado"
          onChange={(event) => {
            setState(event.target.value);
          }}
        />
        <Input
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <div>
          <Button
            type="primary"
            onClick={() => {
              if (!!userName && !!state && !!city && !!email) {
                users[currentUserIndex].fullName = userName;
                users[currentUserIndex].city = city;
                users[currentUserIndex].state = state;
                users[currentUserIndex].email = email;

                setUsers([
                  ...users,
                  {
                    fullName: userName,
                    city: city,
                    state: state,
                    email: email,
                    picture: "",
                    key: `${new Date().getTime()}`,
                  },
                ]);
                hideModal();
              }
            }}
          >
            Criar
          </Button>
        </div>
      </Modal>
    </>
  );
};

export { Users };

