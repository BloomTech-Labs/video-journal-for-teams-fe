import React, { useState } from "react";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import "./profile/tempStyles.css";
import { Layout } from "antd";
import { Form, Input, Button } from "antd";
const { Sider, Content } = Layout;

const Register = props => {
    const [user, setUser] = useState({ first_name: "", last_name: "", email: "", username: "", password: "" });

    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const register = e => {
        e.preventDefault();

        const newUser = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            username: user.username,
            password: user.password
        };

        AxiosWithAuth()
            .post("/api/users/register", newUser)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                props.history.push("/user-dashboard");
            })
            .catch(err => console.log(err));
        setUser("");
    };

    return (
        <div>
            <Layout>
                <Sider />
                <Content>
                    <Form onSubmit={register} className="register-form">
                        <Form.Item>
                            <Input
                                type="text"
                                name="first_name"
                                onChange={changeHandler}
                                value={user.first_name}
                                placeholder="first name"
                                autoComplete="off"
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type="text"
                                name="last_name"
                                onChange={changeHandler}
                                value={user.last_name}
                                placeholder="last name"
                                autoComplete="off"
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type="text"
                                name="email"
                                onChange={changeHandler}
                                value={user.email}
                                placeholder="email"
                                autoComplete="off"
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type="text"
                                name="username"
                                onChange={changeHandler}
                                value={user.username}
                                placeholder="username"
                                autoComplete="off"
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type="password"
                                name="password"
                                onChange={changeHandler}
                                value={user.password}
                                placeholder="password"
                                autoComplete="off"
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="register-form-button">Register</Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </div>
    );
};

export default Register;
