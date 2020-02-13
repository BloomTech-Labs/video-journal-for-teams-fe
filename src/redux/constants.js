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

	FETCH_VIDEO_START: "user:fetch-video-start",
	FETCH_VIDEO_SUCCESS: "user:fetch-video-success",
	FETCH_VIDEO_FAILURE: "user:fetch-video-failure",

	FETCH_FEEDBACK_START: "user:fetch-feedback-start",
	FETCH_FEEDBACK_SUCCESS: "user:fetch-feedback-success",
	FETCH_FEEDBACK_FAILURE: "user:fetch-feedback-failure",

	//TEAM CONSTANTS
	// POST create team
	CREATE_TEAM_START: "teams:create-team-start",
	CREATE_TEAM_SUCCESS: "teams:create-team-success",

	//GET fetch team by id
	FETCH_TEAM_BY_ID_START: "team:fetch-teamById-start",
	FETCH_TEAM_BY_ID_SUCCESS: "team:fetch-teamById-success",

	//GET fetch team members
	FETCH_TEAM_MEMBERS_START: "team:fetch-team-members-start",
	FETCH_TEAM_MEMBERS_SUCCESS: "team:fetch-team-members-success",

	//GET fetch team prompts
	FETCH_TEAM_PROMPTS_START: "team:fetch-team-prompts-start",
	FETCH_TEAM_PROMPTS_SUCCESS: "team:fetch-team-prompts-success",

	//GET fetch team videos
	FETCH_TEAM_VIDEOS_START: "team:fetch-team-videos-start",
	FETCH_TEAM_VIDEOS_SUCCESS: "team:fetch-team-videos-success",

	//DELETE team member from a team
	DELETE_TEAM_MEMBER_START: "team:delete-team-member-start",
	DELETE_TEAM_MEMBER_SUCCESS: "team:delete-team-member-success",

	//POST create team member
	ADD_INVITED_MEMBER_START: "team:add-invited-member-start",
	ADD_INVITED_MEMBER_SUCCESS: "team:add-invited-member-success",
	ADD_INVITED_MEMBER_FAILURE: "team:add-invited-member-failure",

	//POST create team prompt
	POST_TEAM_PROMPT_START: "team:add-prompt-start",
	POST_TEAM_PROMPT_SUCCESS: "team:add-prompt-success",
	POST_TEAM_PROMPT_FAILURE: "team:add-prompt-failure",

	// Invites

	//POST creates team invitation link
	POST_INVITE_LINK_START: "team:post-invite-link-start",
	POST_INVITE_LINK_SUCCESS: "team:post-invite-link-success",

	//Clear invite
	CLEAR_INVITE: "user:clear-invite",

	//GET fetch invite
	FETCH_INVITE_START: "team:fetch-invite-start",
	FETCH_INVITE_SUCCESS: "team:fetch-invite-success",
	FETCH_INVITE_FAILURE: "team:fetch-invite-failure",

	//FAILURES
	GENERATE_ERROR: "error:generate-error",
	CLEAR_ERROR: "error:clear-error",
};

export default constants;