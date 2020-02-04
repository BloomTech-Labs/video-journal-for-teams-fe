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
    const user = {
      email: userCredentials.usernameOrEmail,
      password: userCredentials.password,
    };

    axios
      .post("/auth/login/email", user)
      .then((loginResponse) => {
        console.log(loginResponse);
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
        console.log(loginResponse);

        dispatch({ type: constants.LOGIN_USER, payload: loginResponse.data });
      })
      .catch((error) => {
        console.log({ error });
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
