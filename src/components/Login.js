import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

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

    const credentials = {
      username: user,
      password: pass
    };

    AxiosWithAuth()
      .post("/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.id);
        localStorage.setItem("username", res.data.username);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          value={user}
          onChange={userHandler}
          placeholder="username"
          autoComplete="off"
          required
        />
        <input
          type="password"
          value={pass}
          onChange={passHandler}
          placeholder="password"
          autoComplete="off"
          required
        />
        <button>Log In</button>
        <button
          onClick={() => {
            props.history.push("/");
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
