import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

// Redux
import { connect } from "react-redux";

// Components
import { Layout, Form, Input, Button, Alert } from "antd";

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

  //Redirect if logged already logged in OR on successful registration
  useEffect(() => {
    if (props.isLogged) {
      props.clearError();
      props.history.push("/");
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
    <div>
      <Layout>
        <Sider />
        <Content>
          {/* Alert will show any form validation error */}
          {props.error ? <Alert message={props.error} type="error" /> : null}
          <Form onSubmit={submitRegistration} className="register-form">
            <Form.Item>
              <Input
                type="text"
                name="first_name"
                onChange={handleInput}
                value={applicant.first_name}
                placeholder="first name"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="last_name"
                onChange={handleInput}
                value={applicant.last_name}
                placeholder="last name"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="email"
                onChange={handleInput}
                value={applicant.email}
                placeholder="email"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="username"
                onChange={handleInput}
                value={applicant.username}
                placeholder="username"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                name="password"
                onChange={handleInput}
                value={applicant.password}
                placeholder="password"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                name="confirm_password"
                onChange={handleInput}
                value={applicant.confirm_password}
                placeholder="confirm password"
                autoComplete="off"
                required
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="register-form-button">
                Register
              </Button>
              <Link to="/">I already have an account</Link>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
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
