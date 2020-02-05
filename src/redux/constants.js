const constants = {
  //Syntax of a constant CONST_NAME: "reducer-name:action-name"
  DEMO_CONSTANT: "demo:get-demo-data",

  //USER CONSTANTS
    //AUTH
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
    //GET fetch team members
    FETCH_TEAM_MEMBERS_START: "team:fetch-team-members-start",
    FETCH_TEAM_MEMBERS_SUCCESS: "team:fetch-team-members-success",

    //GET fetch team prompts
    FETCH_TEAM_PROMPTS_START: "team:fetch-team-prompts-start",
    FETCH_TEAM_PROMPTS_SUCCESS: "team:fetch-team-prompts-success",

  //FAILURES
  GENERATE_ERROR: "error:generate-error",
  CLEAR_ERROR: "error:clear-error",
};

export default constants;