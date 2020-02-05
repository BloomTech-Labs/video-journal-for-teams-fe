import constants from "../constants";

const initialState = {
    teams: [],
    isFetching: false,
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
        default:
            return state;
        }
    };

export default teamReducer;