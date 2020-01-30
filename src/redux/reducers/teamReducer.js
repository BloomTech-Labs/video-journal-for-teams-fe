import constants from "../constants";

const initialState = {
    teams: [],
    isFetching: false,
};

const teamReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.FETCH_TEAMS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case constants.FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                teams: [...payload]
            }
        case constants.FETCH_TEAMS_FAILURE:
            return {
                ...state,
                error: [...payload],
                isFetching: false
            }
        default:
            return state;
        }
    };

export default teamReducer;