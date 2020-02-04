import constants from "../constants";
import axios from "axios";
// import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

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
    axios
      .post("/auth/login/email", userCredentials)
      .then((loginResponse) => {
        dispatch({ type: constants.LOGIN_USER, payload: loginResponse });
      })
      .catch((error) => {
        dispatch({ type: constants.GENERATE_ERROR, payload: error.response.data });
      });
  } else {
    axios
      .post("/auth/login/username", userCredentials)
      .then((loginResponse) => {
        dispatch({ type: constants.LOGIN_USER, payload: loginResponse });
      })
      .catch((error) => {
        dispatch({ type: constants.GENERATE_ERROR, payload: error.response.data });
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
