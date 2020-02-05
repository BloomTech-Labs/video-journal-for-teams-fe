const constants = {
  //Syntax of a constant CONST_NAME: "reducer-name:action-name"
  DEMO_CONSTANT: "demo:get-demo-data",

  //USER CONSTANTS
  REGISTER_USER: "user:register-user",
  LOGIN_USER: "user:login",
  LOGOUT_USER: "user:logout",

  //GET fetch teams for user
  FETCH_USER_TEAMS_START: "user:fetch-teams-start",
  FETCH_USER_TEAMS_SUCCESS: "user:fetch-teams-success",

  //GET fetch videos for user

  FETCH_USER_VIDEOS_START: "user:fetch-videos-start",
  FETCH_USER_VIDEOS_SUCCESS: "user:fetch-videos-success",

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

  //GET fetch team members
  GET_TEAM_MEMBERS: "team:get-members",

  //GET fetch team prompts
  GET_TEAM_PROMPTS: "team:get-prompts",

  //FAILURES
  GENERATE_ERROR: "error:generate-error",
  CLEAR_ERROR: "error:clear-error",
};

export default constants;