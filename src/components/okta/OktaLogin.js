import React, { useState, useEffect } from "react";
import OktaAuth from "@okta/okta-auth-js";
import OktaSignIn from "@okta/okta-signin-widget";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";
import { oktaConfig } from "./oktaConfig";
import Axios from "axios";
import { loginUser, setError, clearError } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";

const LoginForm = () => {
	const { authService, authState } = useOktaAuth();
	console.log(authState);
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
			issuer: "https://okta.alpacavids.com/oauth2/v1/default/",
			idps: [{ type: "GOOGLE", id: "0oachck23hRb17ea34x6" }],
			responseType: "id_token",
		});
		oktaAuth
			.signIn({ username, password })
			.then((res) => {
				// dispatch(loginUser(res.user.profile.login));
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
				authService.redirect({ sessionToken });
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

	const responseGoogle = (response) => {
		console.log(response);
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
			{/* <GoogleLogin
				clientId="399318981538-8eudhb11tcao498l94vojqoil44spmrn.apps.googleusercontent.com"
				buttonText="Login With Google"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}></GoogleLogin> */}
			<a href="https://dev-292346.okta.com/oauth2/v1/authorize?idp=0oachck23hRb17ea34x6&client_id=0oacbrrfntl0SndJM4x6&response_type=token&response_mode=fragment&scope=openid%20profile&redirect_uri=http://localhost:3000/google/callback&state=WM6D&nonce=YsG76jo">
				Google Login
			</a>
		</form>
	);
};
export default LoginForm;
