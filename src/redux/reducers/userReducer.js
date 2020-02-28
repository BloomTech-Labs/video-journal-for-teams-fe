import constants from "../constants";

const initialState = {
	isUpdatingUserData: false,
	isLogged: false,
	userId: null,
	first_name: "",
	last_name: "",
	email: "",
	username: "",
	avatar: "",
	imageUpload: {
		isUploading: false,
		progress: 0,
		error: null
	},
	invite: {
		invite_code: null,
		invited_team_id: null,
		error: null,
	},
	error: null,
	isFetching: false,
	teams: [],
	videos: [],

	videoDetailFocus: {
		feedback: {
			entries: [],
			isSubmitting: false,
			isFetching: false,
			error: false,
		},
		isFetching: false,
		error: false,
	},

	videoUpload: {
		isUploading: false,
		progress: 0,
		error: false,
	},

	videoStream: {
		stream: null,
		raw: null,
		playback: false,
		error: false,
	},
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

		//* FETCHING FEEDBACK FOR A VIDEO
		case constants.FETCH_FEEDBACK_START:
			return {
				...state,
				videoDetailFocus: {
					...state.videoDetailFocus,
					feedback: {
						...state.videoDetailFocus.feedback,
						isFetching: true,
						error: false,
					},
				},
			};

		case constants.FETCH_FEEDBACK_SUCCESS:
			return {
				...state,
				videoDetailFocus: {
					...state.videoDetailFocus,
					feedback: {
						...state.videoDetailFocus.feedback,
						entries: payload,
						isFetching: false,
					},
				},
			};

		case constants.FETCH_FEEDBACK_FAILURE:
			return {
				...state,
				videoDetailFocus: {
					...state.videoDetailFocus,
					feedback: {
						...state.videoDetailFocus.feedback,
						isFetching: false,
						error: payload,
					},
				},
			};

		case constants.SUBMIT_FEEDBACK_START:
			return {
				...state,
				videoDetailFocus: {
					...state.videoDetailFocus,
					feedback: {
						...state.videoDetailFocus.feedback,
						isSubmitting: true,
						error: false,
					},
				},
			};

		case constants.SUBMIT_FEEDBACK_SUCCESS:
			return {
				...state,
				videoDetailFocus: {
					...state.videoDetailFocus,
					feedback: {
						...state.videoDetailFocus.feedback,
						isSubmitting: false,
					},
				},
			};

		case constants.SUBMIT_FEEDBACK_FAILURE:
			return {
				...state,
				videoDetailFocus: {
					...state.videoDetailFocus,
					feedback: {
						...state.videoDetailFocus.feedback,
						isSubmitting: false,
						error: payload,
					},
				},
			};

		case constants.FETCH_INVITE_START:
			return {
				...state,
				invite: { ...state.invite, invite_code: payload, error: null },
				isFetching: true,
			};

		case constants.FETCH_INVITE_SUCCESS:
			return {
				...state,
				invite: { ...state.invite, invited_team_id: payload, error: null },
				isFetching: false,
			};

		case constants.FETCH_INVITE_FAILURE:
			return {
				...state,
				isFetching: false,
				invite: { ...state.invite, error: payload },
			};
		case constants.ADD_INVITED_MEMBER_START:
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case constants.ADD_INVITED_MEMBER_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
			};
		case constants.ADD_INVITED_MEMBER_FAILURE:
			return {
				...state,
				isFetching: false,
				error: payload,
			};
		case constants.CLEAR_INVITE:
			return {
				...state,
				invite: {
					invite_code: null,
					invited_team_id: null,
					error: null,
				},
			};

		case constants.UPLOAD_VIDEO_START:
			return {
				...state,
				videoUpload: {
					...state.videoUpload,
					isUploading: true,
				},
			};

		case constants.UPLOAD_VIDEO_PROGRESS:
			return {
				...state,
				videoUpload: {
					...state.videoUpload,
					progress: payload,
				},
			};

		case constants.UPLOAD_VIDEO_FAILURE:
			return {
				...state,
				videoUpload: {
					//Set to defaults
					...initialState.videoUpload,
					error: payload,
				},
			};

		case constants.UPLOAD_VIDEO_SUCCESS:
			return {
				...state,
				videoUpload: {
					//Set all values to default
					...initialState.videoUpload,
				},
				videoStream: {
					//Set all values to default
					...initialState.videoStream,
				},
			};

		case constants.UPDATE_STREAM_OBJECT:
			//Revoke previous blob so the browser can delete it to a prevent memory leak
			if (state.videoStream.stream) {
				window.URL.revokeObjectURL(state.videoStream.stream);
			}

			return {
				...state,
				videoStream: {
					...state.videoStream,
					stream: payload,
				},
			};

		case constants.UPDATE_STREAM_RAW:
			return {
				...state,
				videoStream: {
					...state.videoStream,
					raw: payload,
				},
			};

		case constants.TOGGLE_STREAM_PLAYBACK:
			return {
				...state,
				videoStream: {
					...state.videoStream,
					playback: !state.videoStream.playback,
				},
			};

		case constants.RESTART_RECORDING:
				return {
					...state,
					videoStream: {...initialState.videoStream},
				};

		case constants.SET_STREAM_ERROR:
			return {
				...state,
				videoStream: {
					...state.videoStream,
					error: payload,
				},
			};

		case constants.UPDATE_USER_DATA_START:
			return {
				...state,
				isUpdatingUserData: true
			}
		case constants.UPDATE_USER_DATA_SUCCESS:
			return {
				...state,
				isUpdatingUserData: false,
				error: null,
				userId: payload.id,
				first_name: payload.first_name,
				last_name: payload.last_name,
				email: payload.email,
				username: payload.username
			}
		case constants.UPDATE_USER_DATA_FAILURE:
			return {
				...state,
				isUpdatingUserData: false,
				error: payload
			}
		case constants.UPDATE_PROFILE_PICTURE_START:
			return {
				...state,
				imageUpload: {
					...state.imageUpload, isUploading: true, progress: 0
				},
				error: null
			}	
		case constants.UPDATE_PROFILE_PICTURE_SUCCESS:
			return {
				...state,
				imageUpload: {
					...state.imageUpload, isUploading: false, progress: 100
				},
				avatar: payload,
				error: null
			}	
		case constants.UPDATE_PROFILE_PICTURE_FAILURE:
			return {
				...state,
				imageUpload: {
					...state.imageUpload, isUploading: false, progress: 0
				},
				error: payload
			}
		case constants.UPDATE_PROFILE_PICTURE_PROGRESS:
			return {
				...state,
				imageUpload: {
					...state.imageUpload, isUploading: true, progress: payload
				},
				error: null
			}	
			case constants.UPDATE_PROFILE_PICTURE_CLEAR:
			return {
				...state,
				imageUpload: {
					...state.imageUpload, isUploading: false, progress: 0
				},
				error: null
			}		
		case constants.GENERATE_ERROR:
			return {
				...state,
				error: payload,
				isFetching: false,
				isUpdatingUserData: false,
			};

		case constants.CLEAR_ERROR:
			return {
				...state,
				error: null,
				isFetching: false,
			};
		default:
			return state;
	}
};

export default userReducer;
