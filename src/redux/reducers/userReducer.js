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
      return {
        ...state,
        isLogged: false,
      };
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

<<<<<<< HEAD
export default userReducer;
=======
export default userReducer;

  
  // const userReducer = (state = initialState, { type, payload }) => {
  //     switch (type) {
  //         case constants.FETCH_USER_TEAMS_START:
  //             return {
  //                 ...state,
  //                 isFetching: true,
  //                 error: ''
  //             }
  //         case constants.FETCH_USER_TEAMS_SUCCESS:
  //             return {
  //                 ...state,
  //                 isFetching: false,
  //                 error: '',
  //                 user_teams: [...payload]
  //             }
  //         case constants.FETCH_USER_TEAMS_FAILURE:
  //             return {
  //                 ...state,
  //                 error: payload,
  //                 isFetching: false
  //             }
  //         case constants.FETCH_USER_VIDEOS_START:
  //             return {
  //                 ...state,
  //                 isFetching: true,
  //                 error: ''
  //             }
  //         case constants.FETCH_USER_VIDEOS_SUCCESS:
  //             return {
  //                 ...state,
  //                 isFetching: false,
  //                 error: '',
  //                 user_videos: [...payload]
  //             }
  //         case constants.FETCH_USER_VIDEOS_FAILURE:
  //             return {
  //                 ...state,
  //                 error: payload,
  //                 isFetching: false
  //             }
  //         default:
  //             return state;
  //         }
  //     };
>>>>>>> 08068192b4e89245c99101c4088bb63b306d4486
