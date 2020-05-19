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
			clientId: "0oacbrrfntl0SndJM4x6",
			redirectUri: window.location.origin + "/implicit/callback",
			// logo: "/react.svg",
			// i18n: {
			// 	en: {
			// 		"primaryauth.title": "Sign in to React & Company",
			// 	},
			// },
			authParams: {
				issuer,
				display: "page",
				responseType: "code",
				scope: "openid profile",
				pkce: true,
			},
		});

		widget.renderEl(
			{ el: "#sign-in-widget" },
			() => {},
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
