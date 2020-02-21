export const RemoteServeDir = (function() {
	switch (process.env.REACT_APP_ENV) {
		case "development":
			return process.env.REACT_APP_PUBLIC_URL_LOCAL_HOST;
		case "staging":
			return process.env.REACT_APP_PUBLIC_URL_STAGING;
		case "production":
			return process.env.REACT_APP_PUBLIC_URL_PRODUCTION;
		default:
			return process.env.REACT_APP_PUBLIC_URL_LOCAL_HOST;
	}
})();
