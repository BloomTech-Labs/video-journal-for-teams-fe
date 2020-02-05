const constants = {
  //Syntax of a constant CONST_NAME: "reducer-name:action-name"
  DEMO_CONSTANT: "demo:get-demo-data",

  //USER CONSTANTS
  REGISTER_USER: "user:register-user",
  LOGIN_USER: "user:login",
  LOGOUT_USER: "user:logout",
  //GET fetch all users
  // FETCH_USERS_START = 'FETCH_START',
  // FETCH_USERS_SUCCESS = 'FETCH_SUCCESS',
  // FETCH_USERS_FAILURE = 'FETCH_FAILURE',

  //GET fetch user by id
  // FETCH_USERID_START = 'FETCH_START',
  // FETCH_USERID_SUCCESS = 'FETCH_SUCCESS',
  // FETCH_USERID_FAILURE = 'FETCH_FAILURE',

  //POST add a user
  // ADD_USER_START = 'ADD_START',
  // ADD_USER_SUCCESS = 'ADD_SUCCESS',
  // ADD_USER_FAILURE = 'ADD_FAILURE',

  //PUT update a user
  // UPDATE_USER_START = 'UPDATE_START',
  // UPDATE_USER_SUCCESS = 'UPDATE_SUCCESS',
  // UPDATE_USER_FAILURE = 'UPDATE_FAILURE',

  //DELETE a user
  // DELETE_USER_START = 'DELETE_START',
  // DELETE_USER_SUCCESS = 'DELETE_SUCCESS',
  // DELETE_USER_FAILURE ='DELETE_FAILURE',

  //GET fetch teams for user
  FETCH_USER_TEAMS_START: "user:fetch-teams-start",
  FETCH_USER_TEAMS_SUCCESS: "user:fetch-teams-success",

  //GET fetch teams for user

  FETCH_USER_VIDEOS_START: "user:fetch-videos-start",
  FETCH_USER_VIDEOS_SUCCESS: "user:fetch-videos-success",

  //TEAM CONSTANTS
  //GET fetch all teams
  FETCH_TEAMS_START: "FETCH_START",
  FETCH_TEAMS_SUCCESS: "FETCH_SUCCESS",
  FETCH_TEAMS_FAILURE: "FETCH_FAILURE",

  //GET fetch by team id
  // FETCH_TEAMID_START = 'FETCH_START',
  // FETCH_TEAMID_SUCCESS = 'FETCH_SUCCESS',
  // FETCH_TEAMID_FAILURE = 'FETCH_FAILURE',

  //POST add a team
  // ADD_TEAM_START = 'ADD_START',
  // ADD_TEAM_SUCCESS = 'ADD_SUCCESS',
  // ADD_TEAM_FAILURE = 'ADD_FAILURE',

  //PUT update a team
  // UPDATE_TEAM_START = 'UPDATE_START',
  // UPDATE_TEAM_SUCCESS = 'UPDATE_SUCCESS',
  // UPDATE_TEAM_FAILURE = 'UPDATE_FAILURE',

  //DELETE a team
  // DELETE_TEAM_START = 'DELETE_START',
  // DELETE_TEAM_SUCCESS = 'DELETE_SUCCESS',
  // DELETE_TEAM_FAILURE ='DELETE_FAILURE'

  //FAILURES
  GENERATE_ERROR: "error:generate-error",
  CLEAR_ERROR: "error:clear-error",
};

export default constants;
