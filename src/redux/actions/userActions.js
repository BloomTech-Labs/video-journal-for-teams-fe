import constants from "../constants.js";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const fetchUserTeams = (userId) => (dispatch) => {
    console.log("fetchUserTeams fired")
    dispatch({type: constants.FETCH_USER_TEAMS_START})
    AxiosWithAuth().get(`/api/users/${userId}/teams`)
            .then((res) => {
                console.log(res)
                dispatch({type: constants.FETCH_USER_TEAMS_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: constants.FETCH_USER_TEAMS_FAILURE, payload: err}));
}

export const fetchUserVideos = (userId) => (dispatch) => {
  console.log("fetchUserVideos fired")
  dispatch({type: constants.FETCH_USER_VIDEOS_START})
  AxiosWithAuth().get(`/api/users/${userId}/videos`)
          .then((res) => {
              console.log(res)
              dispatch({type: constants.FETCH_USER_VIDEOS_SUCCESS, payload: res.data})
          })
          .catch((err) => dispatch({type: constants.FETCH_USER_VIDEOS_FAILURE, payload: err}));
}