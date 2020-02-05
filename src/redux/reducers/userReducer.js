import constants from "../constants";

const initialState = {
    user_teams: [],
    user_videos: [],
    isFetching: false,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.FETCH_USER_TEAMS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case constants.FETCH_USER_TEAMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                user_teams: [...payload]
            }
        case constants.FETCH_USER_TEAMS_FAILURE:
            return {
                ...state,
                error: payload,
                isFetching: false
            }
        case constants.FETCH_USER_VIDEOS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case constants.FETCH_USER_VIDEOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                user_videos: [...payload]
            }
        case constants.FETCH_USER_VIDEOS_FAILURE:
            return {
                ...state,
                error: payload,
                isFetching: false
            }
        default:
            return state;
        }
    };

export default userReducer;
