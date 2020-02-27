import constants from "../constants";

const initialState = {
	team: {},
	teamMembers: [],
	newPrompt: {},
	teamPrompts: [],
	teamPromptsAndVideos: [],
	deleteUserCount: 0,
	inviteCode: {},
	error: null,
	isFetching: false,
	isDeleting: false,
	isUpdating: false,
};

const teamReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case constants.CREATE_TEAM_START:
			return {
				...state,
				isFetching: true,
				error: ''
			}
		case constants.CREATE_TEAM_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				teams: payload
			}
		case constants.FETCH_TEAM_BY_ID_START:
			return {
				...state,
				isFetching: true,
				error: null
			};

		case constants.FETCH_TEAM_BY_ID_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				team: payload
			};

		case constants.FETCH_TEAM_MEMBERS_START:
			return {
				...state,
				isFetching: true,
				error: null
			};

		case constants.FETCH_TEAM_MEMBERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				teamMembers: payload
			};

		case constants.FETCH_TEAM_PROMPTS_START:
			return {
				...state,
				isFetching: true,
				error: null
			};

		case constants.FETCH_TEAM_PROMPTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				teamPrompts: payload
			};

		case constants.FETCH_TEAM_PROMPTS_AND_VIDEOS_START:
			return {
				...state,
				isFetching: true,
				error: null
			};

		case constants.FETCH_TEAM_PROMPTS_AND_VIDEOS_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				teamPromptsAndVideos: payload
			};

		case constants.DELETE_TEAM_MEMBER_START:
			return {
				...state,
				isDeleting: true,
				error: null
			};

		case constants.DELETE_TEAM_MEMBER_SUCCESS:
			return {
				...state,
				error: null,
				isDeleting: false,
				deletedUserCount: payload,
				teamMembers: state.teamMembers.filter(member => member.user_id !== payload.user_id)
			}

		case constants.POST_INVITE_LINK_START:
			return {
				...state,
				isFetching: true,
				error: null
			};

		case constants.POST_INVITE_LINK_SUCCESS:
			console.log('Reducer', payload)
			return {
				...state,
				isFetching: false,
				error: null,
				inviteCode: payload
			};

		case constants.POST_TEAM_PROMPT_START:
			return {
				...state,
				isFetching: true,
				error: null
			}

		case constants.POST_TEAM_PROMPT_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: null,
				newPrompt: payload
			};

		case constants.UPDATE_TEAM_MEMBER_ROLE_START:
			return {
				...state,
				isUpdating: true,
				error: null
			}
		case constants.UPDATE_TEAM_MEMBER_ROLE_SUCCESS:
			return {
				...state,
				teamMembers: state.teamMembers.map(member => {
					return member.user_id === payload.user_id ? { ...member, role_id: payload.role_id } : member;
				}),
				isUpdating: false,
				error: null
			};

		case constants.GENERATE_ERROR:
			return {
				...state,
				error: payload,
				isFetching: false,
				isDeleting: false,
				isUpdating: false,
			};

		case constants.CLEAR_ERROR:
			return {
				...state,
				error: payload,
				isFetching: false,
				isDeleting: false,
				isUpdating: false,
			};

		default:
			return state;
	}
};

export default teamReducer;
