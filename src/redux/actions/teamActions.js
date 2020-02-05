import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const getTeamMembers = (id) => (dispatch) => {
  AxiosWithAuth()
    .get(`/teams/${id}/users`)
    .then(teamMembersResponse => {
      console.log("Action Response", teamMembersResponse)
      dispatch({ type: constants.GET_TEAM_MEMBERS, payload: teamMembersResponse.data })
    })
    .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const getTeamPrompts = (id) => (dispatch) => {
  AxiosWithAuth()
    .get(`/teams/${id}/prompts`)
    .then(teamPromptsResponse => {
      console.log("Action Response", teamPromptsResponse)
      dispatch({ type: constants.GET_TEAM_PROMPTS, payload: teamPromptsResponse.data })
    })
    .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

// SET AN ERROR
export const setError = (errorMessage) => (dispatch) => {
  dispatch({ type: constants.GENERATE_ERROR, payload: errorMessage });
};

// CLEAR AN ERROR
export const clearError = () => (dispatch) => {
  dispatch({ type: constants.CLEAR_ERROR, payload: null });
};