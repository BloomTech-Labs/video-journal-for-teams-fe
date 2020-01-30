import React, { useState } from "react";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import { Input, Button } from "antd";

const Login = props => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const userHandler = e => {

        setUser(e.target.value);
    };

    const passHandler = e => {
        setPass(e.target.value);
    };

    const login = e => {
        e.preventDefault();
        if (user.includes("@")) {
            const credentials = {
                email: user,
                password: pass
            };
            AxiosWithAuth()
            .post("/api/users/login/email", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                props.history.push("/test");
            })
            .catch(err => console.log(err));
        } else {
            const credentials = {
                username: user,
                password: pass
            };
            AxiosWithAuth()
            .post("/api/users/login/username", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                props.history.push("/test");
            })
            .catch(err => console.log(err));
        }


    };

    return (
        <div>
            <form onSubmit={login}>
                <Input
                    value={user}
                    onChange={userHandler}
                    placeholder="username"
                    autoComplete="off"
                    required
                />
                <Input
                    type="password"
                    value={pass}
                    onChange={passHandler}
                    placeholder="password"
                    autoComplete="off"
                    required
                />
                <button type="submit">Log In</button>
                <Button
                    onClick={() => {
                        props.history.push("/register");
                    }}
                >
                    Register
        </Button>
            </form>
        </div>
    );
};

export default Login;
