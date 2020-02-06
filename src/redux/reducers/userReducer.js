import constants from "../constants";

const initialState = {
  isLogged: false,
  userId: null,
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  error: null,
  isFetching: false,
  teams: [],
  videos: []
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
        userId: payload.user.id,
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
        userId: payload.user.id,
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
      localStorage.removeItem("persist:root");
      return initialState;
      
    case constants.FETCH_USER_TEAMS_START:
      return {
        ...state,
        isFetching: true,
        error: null
    };
    case constants.FETCH_USER_TEAMS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: null,
          teams: payload
    };
    case constants.FETCH_USER_VIDEOS_START:
      return {
        ...state,
        isFetching: true,
        error: null
    };
    case constants.FETCH_USER_VIDEOS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: null,
          videos: payload
    };


    default:
      return state;
  }
};

export default userReducer;