import React, { useState, useEffect } from "react";
import OktaAuth from "@okta/okta-auth-js";
import OktaSignIn from "@okta/okta-signin-widget";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";
import { oktaConfig } from "./oktaConfig";
import Axios from "axios";
import { loginUser, setError, clearError } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
	const { authService, authState } = useOktaAuth();
	const history = useHistory();
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const [sessionToken, setSessionToken] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	useEffect(() => {
		console.log(state);
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const oktaAuth = new OktaAuth({
			issuer: "https://dev-292346.okta.com/oauth2/v1/default/",
		});
		oktaAuth
			.signIn({ username, password })
			.then((res) => {
				dispatch(loginUser(res.user.profile.login));
				console.log(authService);
				// Axios.post(`https://dev-292346.okta.com/api/v1/authn/recovery/password`, {
				// 	username: res.user.profile.login,
				// 	factorType: "EMAIL",
				// })
				// .then((res) => console.log(res))
				// .catch((err) => console.log(err));
				const sessionToken = res.sessionToken;
				setSessionToken(sessionToken);
				// console.log(authState);
				// console.log(authService.login("/user-dashboard"));
				// authService.redirect({ sessionToken });
				// sessionToken is a one-use token, so make sure this is only called once
			})
			.catch((err) => console.log("Found an error", err));
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	if (sessionToken) {
		// Hide form while sessionToken is converted into id/access tokens
		return null;
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input id="username" type="text" value={username} onChange={handleUsernameChange} />
			</label>
			<label>
				Password:
				<input id="password" type="password" value={password} onChange={handlePasswordChange} />
			</label>
			<input id="submit" type="submit" value="Submit" />
		</form>
	);
};
export default LoginForm;
