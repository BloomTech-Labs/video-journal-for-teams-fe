import constants from "../constants";

const initialState = {
	teams: [],
	users: [],
	error: null,
	isFetching: false,
	isDeleting: false,
	isUpdating: false,
};

const organizationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case constants.FETCH_ORGANIZATION_TEAMS_SUCCESS:
			return {
				...state,
				teams: payload,
			};

		case constants.FETCH_ORGANIZATION_USERS_SUCCESS:
			return {
				...state,
				users: payload,
			};

		case constants.DELETE_ORGANIZATION_USER_SUCCESS:
			return {
				...state,
				users: state.users.filter((x) => x.user_id !== payload),
			};
		case constants.UPDATE_ORG_MEMBER_ROLE_START:
			return {
				...state,
				isUpdating: true,
				error: null,
			};
		case constants.UPDATE_ORG_MEMBER_ROLE_SUCCESS:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === payload.user_id) {
						return { ...user, role_id: payload.role_id };
					} else {
						return user;
					}
				}),
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

export default organizationReducer;
