import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const SignUp = props => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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
      username: user,
      password: pass,
    };

    if (pass === confirmPass) {
      e.preventDefault();
      AxiosWithAuth()
        .post("/api/auth/register", newUser)
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
      <StyledAccept>Passwords match!</StyledAccept>
    ) : (
      <StyledWarning>***Passwords must match***</StyledWarning>
    );
  };

  const passLength = () => {
    return pass.length === 0 || pass.length > 3 ? (
      ""
    ) : (
      <StyledWarning>
        ***Password must be at least 4 characters***
      </StyledWarning>
    );
  };

  return (
    <div>
      <form onSubmit={register}>
        <i class="fas fa-id-card fa-5x"></i>
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
