import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { oktaConfig as config } from "./oktaConfig";

const Login = () => {
	// const { authService, authState } = useOktaAuth();
	// console.log(authService.getAccessToken(), authState);
	useEffect(() => {
		const { issuer, clientId, redirectUri, scopes } = config;
		console.log(issuer, clientId);
		const widget = new OktaSignIn({
			baseUrl: "https://dev-292346.okta.com",
			clientId,
			redirectUri: window.location.origin + "/implicit/callback",
			pkce: true,
			logo: "/react.svg",
			i18n: {
				en: {
					"primaryauth.title": "Sign in to React & Company",
				},
			},
			authParams: {
				issuer,
				display: "page",
				responseType: ["id_token", "token", "code"],
				scope: "openid profile",
			},
		});

		widget.renderEl(
			{ el: "#sign-in-widget" },
			(res) => {
				console.log(res);
			},
			(err) => {
				throw err;
			}
		);
	}, []);

	return (
		<div>
			<div id="sign-in-widget" />
		</div>
	);
};
export default Login;
