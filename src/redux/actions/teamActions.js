import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const getTeamMembers = (team_id) => (dispatch) => {
  dispatch({type: constants.FETCH_TEAM_MEMBERS_START})
  AxiosWithAuth()
    .get(`/teams/${team_id}/users`)
    .then(teamMembersResponse => {
      console.log("Action Response", teamMembersResponse)
      dispatch({ type: constants.FETCH_TEAM_MEMBERS_SUCCESS, payload: teamMembersResponse.data })
    })
    .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const getTeamPrompts = (team_id) => (dispatch) => {
  dispatch({type: constants.FETCH_TEAM_PROMPTS_START})
  AxiosWithAuth()
    .get(`/teams/${team_id}/prompts`)
    .then(teamPromptsResponse => {
      console.log("Action Response", teamPromptsResponse)
      dispatch({ type: constants.FETCH_TEAM_PROMPTS_SUCCESS, payload: teamPromptsResponse.data })
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