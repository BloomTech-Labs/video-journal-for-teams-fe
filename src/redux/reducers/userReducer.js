import constants from "../constants";

const initialState = {
  isLogged: false,
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //TODO Add user ID when it becomes available by backend
    //TODO replace localStorage with sessionStorage (temp storage)
    case constants.REGISTER_USER:
      //Store login token in browser localStorage
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        first_name: payload.user.first_name,
        last_name: payload.user.last_name,
        email: payload.user.email,
        username: payload.user.username,
        isLogged: true,
      };

    //TODO Add user ID when it becomes available by backend
    //TODO replace localStorage with sessionStorage (temp storage)
    case constants.LOGIN_USER:
      //Store login token in browser localStorage
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        first_name: payload.user.first_name,
        last_name: payload.user.last_name,
        email: payload.user.email,
        username: payload.user.username,
        isLogged: true,
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

    case constants.LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default userReducer;
