import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Components
import { Layout, Form, Icon, Input, Button, Checkbox } from "antd";

// Styles
import "../components/profile/tempStyles.css";

const { Sider, Content } = Layout;

const Login = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const userHandler = (e) => {
    setUser(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    if (user.includes("@")) {
      const credentials = {
        email: user,
        password: pass,
      };
      axios
        .post("/api/auth/login/email", credentials)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          props.history.push("/user-dashboard");
        })
        .catch((err) => console.log(err));
    } else {
      const credentials = {
        username: user,
        password: pass,
      };
      axios
        .post("/auth/login/username", credentials)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          props.history.push("/user-dashboard");
        })
        .catch((err) => console.log({ err }));
    }
  };

  return (
    <div>
      <Layout>
        <Sider />
        <Content>
          <Form onSubmit={login} className="login-form">
            <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.5)" }} />}
                value={user}
                onChange={userHandler}
                placeholder="Enter username or email"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.5)" }} />}
                type="password"
                value={pass}
                onChange={passHandler}
                placeholder="Enter password"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <Link to="" className="login-form-forgot">
                forgot password?
              </Link>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log In
              </Button>
              <Link to="/register">or register now!</Link>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
  );
};

export default Login;
