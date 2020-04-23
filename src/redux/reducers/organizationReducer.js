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
			
		default:
			return state;
	}
};

export default organizationReducer;
