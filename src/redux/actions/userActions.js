import constants from "../constants";
import axios from "axios";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

// REGISTER A NEW USER
export const registerUser = (applicant) => (dispatch) => {
  return axios
    .post("/auth/register", applicant)
    .then((registerResponse) => {
      dispatch({ type: constants.REGISTER_USER, payload: registerResponse.data });
    })
    .catch((error) => {
      const duplicateAccountError = error.response.data.error;
      if (duplicateAccountError) {
        dispatch({ type: constants.GENERATE_ERROR, payload: duplicateAccountError });
      } else {
        dispatch({ type: constants.GENERATE_ERROR, payload: "An error occurred, try again later." });
      }
    });
};

// LOGIN A USER
export const loginUser = (userCredentials) => (dispatch) => {
  if (userCredentials.method === "email") {
    const user = {
      email: userCredentials.usernameOrEmail,
      password: userCredentials.password,
    };

    axios
      .post("/auth/login/email", user)
      .then((loginResponse) => {
        dispatch({ type: constants.LOGIN_USER, payload: loginResponse.data });
      })
      .catch((error) => {
        dispatch({ type: constants.GENERATE_ERROR, payload: "Invalid username/password combination." });
      });
  } else {
    const user = {
      username: userCredentials.usernameOrEmail,
      password: userCredentials.password,
    };

    axios
      .post("/auth/login/username", user)
      .then((loginResponse) => {
        dispatch({ type: constants.LOGIN_USER, payload: loginResponse.data });
      })
      .catch((error) => {
        dispatch({ type: constants.GENERATE_ERROR, payload: "Invalid username/password combination." });
      });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: constants.LOGOUT_USER });
};

// SET AN ERROR
export const setError = (errorMessage) => (dispatch) => {
  dispatch({ type: constants.GENERATE_ERROR, payload: errorMessage });
};

// CLEAR AN ERROR
export const clearError = () => (dispatch) => {
  dispatch({ type: constants.CLEAR_ERROR, payload: null });
};

export const createTeam = (data) => (dispatch) => {
  dispatch({ type: constants.CREATE_TEAM_START });
  AxiosWithAuth()
  .post('/api/teams/')
  .then(res => {
      dispatch({ type: constants.CREATE_TEAM_SUCCESS, payload: res.data });
  })
  .catch(err => dispatch({ type: constants.CREATE_TEAM_FAILURE, payload: err }));
}

// FETCH TEAMS FOR USER
export const fetchUserTeams = (userId) => (dispatch) => {
  dispatch({ type: constants.FETCH_USER_TEAMS_START });
  AxiosWithAuth()
    .get(`/users/${userId}/teams`)
    .then((res) => {
      dispatch({ type: constants.FETCH_USER_TEAMS_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
};

// FETCH VIDEOS FOR USER
export const fetchUserVideos = (userId) => (dispatch) => {
  dispatch({ type: constants.FETCH_USER_VIDEOS_START });
  AxiosWithAuth()
    .get(`/users/${userId}/videos`)
    .then((res) => {
      console.log(res);
      dispatch({ type: constants.FETCH_USER_VIDEOS_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
};

export const fetchVideo = (videoId) => (dispatch) => {
  dispatch({ type: constants.FETCH_VIDEO_START });
  AxiosWithAuth()
    .get(`/videos/${videoId}`)
    .then((res) => {
      dispatch({ type: constants.FETCH_VIDEO_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: constants.FETCH_VIDEO_FAILURE, payload: err }));
};

export const fetchFeedback = (videoId) => (dispatch) => {
  dispatch({ type: constants.FETCH_FEEDBACK_START });
  AxiosWithAuth()
    .get(`/videos/${videoId}/feedback`)
    .then((res) => {
      dispatch({ type: constants.FETCH_FEEDBACK_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: constants.FETCH_FEEDBACK_FAILURE, payload: err }));
};

export const fetchInvite = (invite) => (dispatch) => {
  dispatch({ type: constants.FETCH_INVITE_START, payload: invite });
  axios
  .get(`/invites/${invite}`)
    .then((invite) => {
      if (invite.data.team_id > 0) {
        dispatch({ type: constants.FETCH_INVITE_SUCCESS, payload: invite.data.team_id });
      } else {
        dispatch({ type: constants.FETCH_INVITE_FAILURE, payload: invite.data.message });
      }
    })
    .catch((err) => {console.log(err)
      dispatch({ type: constants.FETCH_INVITE_FAILURE, payload: "Invalid invite code." })});
}

export const addToInvitedTeam = (team_id, user_id, history) => (dispatch) => {
  dispatch({ type: constants.ADD_INVITED_MEMBER_START });
        AxiosWithAuth()
        .post(`/teams/${team_id}/users`, {
          user_id: user_id,
          role_id: 1,
          team_id: team_id
        })
        .then((res) => {
          dispatch({ type: constants.ADD_INVITED_MEMBER_SUCCESS, payload: res });
          history.push(`/teams/${team_id}`)
        }).then(() => dispatch({ type: constants.CLEAR_INVITE }))
        .catch((err) => {
          dispatch({ type: constants.ADD_INVITED_MEMBER_FAILURE, payload: err });
        })
}

