import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const createTeam = (newTeam, history) => (dispatch) => {
  dispatch({ type: constants.CREATE_TEAM_START });
  AxiosWithAuth()
  .post('/teams/', newTeam)
  .then(res => {
      dispatch({ type: constants.CREATE_TEAM_SUCCESS, payload: res.data })
      console.log(res)
      history.push(`/teams/${res.data.id}`);
  })
  .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: "An error occurred, try again later." }));
}

export const fetchTeamById = (team_id) => (dispatch) => {
  dispatch({type: constants.FETCH_TEAM_BY_ID_START})
  AxiosWithAuth()
    .get(`/teams/${team_id}`)
    .then(teamResponse => {
      console.log("Action Response", teamResponse)
      dispatch({ type: constants.FETCH_TEAM_BY_ID_SUCCESS, payload: teamResponse.data })
    })
    .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const fetchTeamMembers = (team_id) => (dispatch) => {
  dispatch({type: constants.FETCH_TEAM_MEMBERS_START})
  AxiosWithAuth()
    .get(`/teams/${team_id}/users`)
    .then(teamMembersResponse => {
      console.log("Action Response", teamMembersResponse)
      dispatch({ type: constants.FETCH_TEAM_MEMBERS_SUCCESS, payload: teamMembersResponse.data })
    })
    .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const fetchTeamPrompts = (team_id) => (dispatch) => {
  dispatch({type: constants.FETCH_TEAM_PROMPTS_START})
  AxiosWithAuth()
    .get(`/teams/${team_id}/prompts`)
    .then(teamPromptsResponse => {
      console.log("Action Response", teamPromptsResponse)
      dispatch({ type: constants.FETCH_TEAM_PROMPTS_SUCCESS, payload: teamPromptsResponse.data })
    })
    .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const fetchTeamVideos = (team_id) => (dispatch) => {
  dispatch({type: constants.FETCH_TEAM_VIDEOS_START})
  AxiosWithAuth()
    .get(`/teams/${team_id}/videos`)
    .then(teamVideosResponse => {
      console.log("Action Video Response", teamVideosResponse)
      dispatch({ type: constants.FETCH_TEAM_VIDEOS_SUCCESS, payload: teamVideosResponse.data })
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
