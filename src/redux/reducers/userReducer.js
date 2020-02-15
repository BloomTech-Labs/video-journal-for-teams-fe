import constants from "../constants";

const initialState = {
	isLogged: false,
	userId: null,
	first_name: "",
	last_name: "",
	email: "",
	username: "",
	avatar: "",
	invite: {
		invite_code: null,
		invited_team_id: null,
		error: null
	},
	error: null,
	isFetching: false,
	teams: [],
	videos: [],
	videoDetailFocus: {
		feedback: [],
	}
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case constants.REGISTER_USER:
			//Store login token in browser localStorage
			localStorage.setItem("token", payload.token);
			return {
				...state,
				userId: payload.user.id,
				first_name: payload.user.first_name,
				last_name: payload.user.last_name,
				email: payload.user.email,
				username: payload.user.username,
				isLogged: true,
			};

		case constants.LOGIN_USER:
			//Store login token in browser localStorage
			localStorage.setItem("token", payload.token);
			return {
				...state,
				userId: payload.user.id,
				first_name: payload.user.first_name,
				last_name: payload.user.last_name,
				email: payload.user.email,
				username: payload.user.username,
				avatar: payload.user.avatar,
				isLogged: true,
			};

		case constants.GENERATE_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			};

		case constants.CLEAR_ERROR:
			return {
				...state,
				error: null,
			};

		case constants.LOGOUT_USER:
			localStorage.removeItem("token");
			localStorage.removeItem("persist:root");
			return initialState;

		case constants.FETCH_USER_TEAMS_START:
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case constants.FETCH_USER_TEAMS_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				teams: payload,
			};
		case constants.FETCH_USER_VIDEOS_START:
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case constants.FETCH_USER_VIDEOS_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				videos: payload,
			};

		//* VIDEO FETCHING (Individual video)
		case constants.FETCH_VIDEO_START:
			return {
				...state,
				isFetching: true,
				error: null,
			};

		case constants.FETCH_VIDEO_SUCCESS:
			return {
				...state,
				videoDetailFocus: { ...state.videoDetailFocus, ...payload },
				isFetching: false,
				error: null,
			};

		case constants.FETCH_VIDEO_FAILURE:
			return {
				...state,
				isFetching: false,
				error: payload,
			};

		//* FEEDBACK FETCHING (Individual video)
		case constants.FETCH_FEEDBACK_START:
			return {
				...state,
				isFetching: true,
				error: null,
			};

		case constants.FETCH_FEEDBACK_SUCCESS:
			return {
				...state,
				videoDetailFocus: { ...state.videoDetailFocus, feedback: payload },
				isFetching: false,
				error: null,
			};

		case constants.FETCH_FEEDBACK_FAILURE:
			return {
				...state,
				isFetching: false,
				error: payload,
			};

		case constants.FETCH_INVITE_START:
			return {
				...state,
				invite: { ...state.invite, invite_code: payload, error: null },
				isFetching: true,
			}

		case constants.FETCH_INVITE_SUCCESS:
			return {
				...state,
				invite: { ...state.invite, invited_team_id: payload, error: null },
				isFetching: false,
			}

		case constants.FETCH_INVITE_FAILURE:
			return {
				...state,
				isFetching: false,
				invite: { ...state.invite, error: payload },
			}
		case constants.ADD_INVITED_MEMBER_START:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case constants.ADD_INVITED_MEMBER_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null
			}
		case constants.ADD_INVITED_MEMBER_FAILURE:
			return {
				...state,
				isFetching: false,
				error: payload
			}
		case constants.CLEAR_INVITE:
			return {
				...state,
				invite: {
					invite_code: null,
					invited_team_id: null,
					error: null
				}
			}

		default:
			return state;
	}
};

export default userReducer;