import socketio from "socket.io-client";

const host = function () {
	switch (process.env.REACT_APP_ENV) {
		case "development":
			return process.env.REACT_APP_SOCKET_LOCAL_HOST;
		case "staging":
			return process.env.REACT_APP_SOCKET_STAGING_URL;
		case "production":
			return process.env.REACT_APP_SOCKET_PRODUCTION_URL;
		default:
			return process.env.REACT_APP_SOCKET_LOCAL_HOST;
	}
};
export const ENDPOINT = host();

//please work

export const socket = socketio(ENDPOINT);
