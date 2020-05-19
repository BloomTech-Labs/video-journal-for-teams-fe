import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
//import AuthSider from "../components/AuthSider";

// Redux
import { connect } from "react-redux";

// Actions
import { loginUser, setError, clearError } from "../redux/actions/userActions";

// Components
import { Form, Icon, Input, Button, Alert } from "antd";

const emailLoginSchema = yup.object().shape({
  email: yup.string().email(),
});

const Login = ({isLogged, clearError, loginUser, error}) => {
  const [user, setUser] = useState({
    usernameOrEmail: "",
    password: "",
  });

  let history = useHistory();

  //Redirect if logged already logged in OR on successful registration
  useEffect(() => {
    if (isLogged) {
      clearError();
      history.push("/user-dashboard");
    }
  }, [isLogged, clearError, history]);

  const handleInput = (e) => {
    clearError();
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
  };

  const submitLogin = (e) => {
    e.preventDefault();

    const userCredentials = user;

    emailLoginSchema
      .validate({ email: user.usernameOrEmail })
      .then(() => {
        userCredentials.method = "email";

        loginUser(userCredentials);
      })
      .catch(() => {
        userCredentials.method = "username";

        loginUser(userCredentials);
      });

    setUser({ usernameOrEmail: "", password: "" });
  };

  return (
    <>
      <div className="login">
        <nav className="loginNav">
          <h1>Teem Reel</h1>
          <div className="loginLinks">
          <Link to="/">Go Back</Link>
           <span>
          Not a Member? <Link to="/register" onClick={() => clearError()}>Register here</Link>
          </span>
          </div>
        </nav>
       
        <div className="loginContent">
          <h1>Welcome Back!</h1>
        {error ? <Alert message={error} type="error" /> : null}
        <Form onSubmit={submitLogin} className="loginForm" data-testid="login-form">
        <Form.Item label="Username or Email"labelAlign="left" className="formEmail">
            <Input
              prefix={<Icon type="user"  />}
              type="text"
              name="usernameOrEmail"
              value={user.usernameOrEmail}
              onChange={handleInput}
              placeholder="Username or Email"
              autoComplete="off"
              required
            />
          </Form.Item>
          <Form.Item label="Password"labelAlign="left" className="formPassword">
            <Input
              prefix={<Icon type="lock"  />}
              type="password"
              name="password"
              value={user.password}
              onChange={handleInput}
              placeholder="Password"
              autoComplete="off"
              required
            />
          </Form.Item>
          <Form.Item >
            <div className="buttons">
            <Button type="primary" htmlType="submit" className="loginButton">
              Sign In
            </Button>
            <Button type="primary" htmlType="submit" className="loginButton">
              Forgot Password?
            </Button>
            </div>
          </Form.Item>
        </Form>
        </div>
      </div>
    </>
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