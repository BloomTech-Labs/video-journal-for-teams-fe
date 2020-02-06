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
  videos: [],
  videoDetailFocus: {
    feedback: [],
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
      console.log(`${constants.GENERATE_ERROR}:`, payload);
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
        error: null,
      };
    case constants.FETCH_USER_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        teams: payload,
      };
    case constants.FETCH_USER_VIDEOS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case constants.FETCH_USER_VIDEOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        videos: payload,
      };

    //* VIDEO FETCHING (Individual video)
    case constants.FETCH_VIDEO_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case constants.FETCH_VIDEO_SUCCESS:
      return {
        ...state,
        videoDetailFocus: { ...state.videoDetailFocus, ...payload },
        isFetching: false,
        error: null,
      };

    case constants.FETCH_VIDEO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };

    //* FEEDBACK FETCHING (Individual video)
    case constants.FETCH_FEEDBACK_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case constants.FETCH_FEEDBACK_SUCCESS:
      return {
        ...state,
        videoDetailFocus: { ...state.videoDetailFocus, feedback: payload },
        isFetching: false,
        error: null,
      };

    case constants.FETCH_FEEDBACK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };

    default:
      return state;
  }
};

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
