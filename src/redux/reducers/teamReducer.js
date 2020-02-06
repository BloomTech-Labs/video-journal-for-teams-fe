import constants from "../constants";

const initialState = {
  team: {},
  teamMembers: [],
  teamPrompts: [],
  error: null,
  isFetching: false,
};

const teamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

    case constants.GENERATE_ERROR:
      return {
        ...state,
        error: payload,
      };

    case constants.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default teamReducer;