import constants from "../constants";

const initialState = {
  teamMembers: [],
  teamPrompts: [],
  error: null
};

const teamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_TEAM_MEMBERS:
      console.log("Reducer", payload)
      return {
        ...state,
        teamMembers: payload
      };

    case constants.GET_TEAM_PROMPTS:
      console.log("Reducer", payload)
      return {
        ...state,
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