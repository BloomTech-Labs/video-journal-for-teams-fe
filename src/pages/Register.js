import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import Alpaca from '../imgs/Group 33.png';

// Redux
import { connect } from "react-redux";

// Components
import { Layout, Form, Input, Button, Alert, Row, Col } from "antd";

// Styles
import "../components/profile/tempStyles.css";

// Actions
import { registerUser, setError, clearError } from "../redux/actions/userActions";

const { Sider, Content } = Layout;

//This is the registration form schema
//If the data doesn't look like this when we submit then it will fail with a message
const formSchema = yup.object().shape({
  first_name: yup.string(),
  last_name: yup.string(),
  email: yup.string().email("Please enter a valid email address."),
  username: yup
    .string()
    .min(4, "Username must be atleast 4 characters.")
    .max(16, "Username must be less than 16 characters."),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 characters.")
    .max(72, "Password must be less than 72 characters."),
  confirm_password: yup.string().oneOf([yup.ref("password"), null], "Passwords must match."),
});

const Register = (props) => {
  const [applicant, setApplicant] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  let history = useHistory();

  //Redirect if logged already logged in OR on successful registration
  useEffect(() => {
    if (props.isLogged) {
      props.clearError();
      history.push("/user-dashboard");
    }
  }, [props.isLogged]);

  const handleInput = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
  };

  //Attempt to register new user with provided info
  const submitRegistration = (e) => {
    e.preventDefault();

    //Validate form data, return error on first error encountered
    formSchema
      .validate(applicant, { abortEarly: true })
      .then(() => {
        //Data is good, proceed to registration action
        props.registerUser(applicant);
      })
      .catch((validationError) => {
        props.setError(validationError.errors);
      });
  };

  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={6} xl={8} className="auth-sider">
        <img src={Alpaca}></img>
        </Col>
        <Col xl={16} className="auth-main">
          <span>
            Already a member? <Link to="/">Sign in</Link>
          </span>`
          {/* Alert will show any form validation error */}
          <div className="auth-content">
            <h1>Create Account</h1>
          {props.error ? <Alert message={props.error} type="error" /> : null}
          <Form onSubmit={submitRegistration} className="register-form" data-testid="register-form" labelAlign="left">
          <Form.Item label="First Name"labelAlign="left">
              <Input
                type="text"
                name="first_name"
                onChange={handleInput}
                value={applicant.first_name}
                placeholder="First Name"
                autoComplete="off"
                required
              />
              </Form.Item>
              <Form.Item label="Last Name">
                <Input
                  type="text"
                  name="last_name"
                  onChange={handleInput}
                  value={applicant.last_name}
                  placeholder="Last Name"
                  autoComplete="off"
                  required
                />
              </Form.Item>
            <Form.Item label="Email">
              <Input
                type="text"
                name="email"
                onChange={handleInput}
                value={applicant.email}
                placeholder="Email"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item label="Username">
              <Input
                type="text"
                name="username"
                onChange={handleInput}
                value={applicant.username}
                placeholder="Username"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                type="password"
                name="password"
                onChange={handleInput}
                value={applicant.password}
                placeholder="Password"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item label="Confirm Password">
              <Input
                type="password"
                name="confirm_password"
                onChange={handleInput}
                value={applicant.confirm_password}
                placeholder="Confirm Password"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
                Register
              </Button>
            </Form.Item>
          </Form>
          </div>
        </Col>
      </Row>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.User.isLogged,
  error: state.User.error,
});

const mapActionsToProps = {
  registerUser,
  setError,
  clearError,
};

export default connect(mapStateToProps, mapActionsToProps)(Register);