import React, { useState } from "react";
import AxiosWithAuth from "./utils/AxiosWithAuth";
import { Button, Input } from "antd";

const SignUp = props => {
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const emailHandler = e => {
        setEmail(e.target.value);
    };

    const userHandler = e => {
        setUser(e.target.value);
    };

    const passHandler = e => {
        setPass(e.target.value);
    };

    const confirmHandler = e => {
        setConfirmPass(e.target.value);
    };

    const register = e => {
        const newUser = {
            email: email,
            username: user,
            password: pass
        };

        if (pass === confirmPass) {
            e.preventDefault();
            AxiosWithAuth()
                .post("/api/users/register", newUser)
                .then(res => {
                    console.log(res);
                    props.history.push("/");
                })
                .catch(err => console.log(err));
            setUser("");
            setPass("");
            setConfirmPass("");
        } else {
            e.preventDefault();
            alert("Error! Passwords do not match!");
        }
    };

    const passConfirm = () => {
        return (pass === "" && confirmPass === "") || confirmPass.length === 0 ? (
            ""
        ) : pass === confirmPass ? (
            <p>Passwords match!</p>
        ) : (
                    <p>***Passwords must match***</p>
                );
    };

    const passLength = () => {
        return pass.length === 0 || pass.length > 3 ? (
            ""
        ) : (
                <p>***Password must be at least 4 characters***</p>
            );
    };

    return (
        <div>
            <form onSubmit={register}>
                <Input
                    type="text"
                    name="email"
                    value={email}
                    onChange={emailHandler}
                    placeholder="email"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="user"
                    value={user}
                    onChange={userHandler}
                    placeholder="Username"
                    autoComplete="off"
                />
                <input
                    type="password"
                    name="password"
                    value={pass}
                    onChange={passHandler}
                    placeholder="Password"
                    autoComplete="off"
                />
                {passLength()}
                <input
                    type="password"
                    name="confirm password"
                    value={confirmPass}
                    onChange={confirmHandler}
                    placeholder="Confirm Password"
                    autoComplete="off"
                />
                {passConfirm()}
                <button>Register</button>
            </form>
        </div>
    );
};

export default SignUp;
