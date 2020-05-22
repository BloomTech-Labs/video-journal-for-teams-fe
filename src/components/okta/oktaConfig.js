const CLIENT_ID = process.env.CLIENT_ID;
const ISSUER = process.env.ISSUER;

export const oktaConfig = {
	clientId: "0oacbrrfntl0SndJM4x6D",
	issuer: "https://dev-292346.okta.com/oauth2/default",
	redirectUri: window.location.origin + "/implicit/callback",
	scopes: "openid",
	disableHttpsCheck: false,
};
