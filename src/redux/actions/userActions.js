import constants from "../constants";
import axios from "axios";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

// REGISTER A NEW USER
export const registerUser = (applicant) => (dispatch) => {
  axios
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

// FETCH TEAMS FOR USER
export const fetchUserTeams = (userId) => (dispatch) => {

    dispatch({type: constants.FETCH_USER_TEAMS_START})
    AxiosWithAuth().get(`/users/${userId}/teams`)
            .then((res) => {
                console.log(res)
                dispatch({type: constants.FETCH_USER_TEAMS_SUCCESS, payload: res.data})
            })
            .catch((err) => dispatch({type: constants.GENERATE_ERROR, payload: err}));
}

// FETCH VIDEOS FOR USER
export const fetchUserVideos = (userId) => (dispatch) => {

  dispatch({type: constants.FETCH_USER_VIDEOS_START})
  AxiosWithAuth().get(`/users/${userId}/videos`)
          .then((res) => {
              console.log(res)
              dispatch({type: constants.FETCH_USER_VIDEOS_SUCCESS, payload: res.data})
          })
          .catch((err) => dispatch({type: constants.GENERATE_ERROR, payload: err}));
}