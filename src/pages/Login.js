import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

// Redux
import { connect } from "react-redux";

// Actions
import { loginUser, setError, clearError } from "../redux/actions/userActions";

// Components
import { Layout, Form, Icon, Input, Button, Checkbox, Alert } from "antd";

// Styles
import "../components/profile/tempStyles.css";

const { Sider, Content } = Layout;

const emailLoginSchema = yup.object().shape({
  email: yup.string().email(),
});

const Login = (props) => {
  const [user, setUser] = useState({
    usernameOrEmail: "",
    password: "",
  });

  //Redirect if logged already logged in OR on successful registration
  useEffect(() => {
    if (props.isLogged) {
      props.clearError();
      props.history.push("/");
    }
  }, [props.isLogged]);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    const userCredentials = user;

    emailLoginSchema
      .validate(user.usernameOrEmail)
      .then(() => {
        userCredentials.method = "email";

        props.loginUser(userCredentials);
      })
      .catch(() => {
        userCredentials.method = "username";

        props.loginUser(userCredentials);
      });

    setUser({ usernameOrEmail: "", password: "" });
  };

  return (
    <Layout>
      <Sider />
      <Content>
        {props.error ? <Alert message={props.error} type="error" /> : null}
        <Form onSubmit={submitLogin} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.5)" }} />}
              type="text"
              name="usernameOrEmail"
              value={user.usernameOrEmail}
              onChange={handleInput}
              placeholder="Username or email"
              autoComplete="off"
              required
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.5)" }} />}
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Password"
              autoComplete="off"
              required
            />
          </Form.Item>
          <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <Link to="" className="login-form-forgot">
              Forgot password?
            </Link>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log In
            </Button>
            <Link to="/register">Register an account instead</Link>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.User.isLogged,
  error: state.User.error,
});

const mapActionsToProps = {
  loginUser,
  setError,
  clearError,
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
