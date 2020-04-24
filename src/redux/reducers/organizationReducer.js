import constants from "../constants";

const initialState = {
	teams: [],
	users: [],
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
				users:  state.users.filter(x=> x.user_id !== payload)
			};

		default:
			return state;
	}
};

export default organizationReducer;
