import { Button, Card, Form, Input } from "antd";
import React, { Component } from "react";
import logo from "../../assets/img/virtex-login-image.png";
import { history } from "../../history";
import { login } from "../../utils/auth";
import "../Login/Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    };
  }

  login = (token) => {
    login(token);
    history.push("/");
  };

  render() {
    return (
      <>
        <div className="body">
          <Card className="card-login">
            <Form
              onFinish={() => {
                this.login(this.textInput.state.value);
              }}>
              <Form.Item>
                <img src={logo} className="logo" alt="Logo da Virtex Telecom" />
              </Form.Item>
              <Form.Item
                name="usuário"
                rules={[{
                    required: true,
                    message: "Informe seu nome de usuário",
                  }]}>
                <Input
                  placeholder="usuário"
                  ref={(input) => (this.textInput = input)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{
                    required: true,
                    message: "Informe sua senha",
                  }]}>
                <Input.Password placeholder="senha" />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" type="primary" danger>
                  Entrar
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </>
    );
  }
}
