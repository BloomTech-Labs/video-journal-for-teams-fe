import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import OktaAuth from "@okta/okta-auth-js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

const GoogleRedirect = () => {
	const { authService, authState } = useOktaAuth();
	const history = useHistory();
	const dispatch = useDispatch();
	const oktaAuth = new OktaAuth({
		issuer: "https://dev-292346.okta.com/oauth2/v1/default/",
		idps: [{ type: "GOOGLE", id: "0oachck23hRb17ea34x6" }],
		responseType: "id_token",
	});

	useEffect(() => {
		console.log(window.location.href.split("="));
		authService.getUser().then((user) => console.log(user));
		history.push("/user-dashboard");
	});

	return <div></div>;
};

export default GoogleRedirect;
