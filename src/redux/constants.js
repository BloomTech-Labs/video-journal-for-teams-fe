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
	FETCH_USER_TEAMS_FAILURE: "user:fetch-teams-failure",

	//PUT update team info
	FETCH_UPDATED_TEAM: "team:fetch-team-updates",

	//GET fetch videos for user
	FETCH_USER_VIDEOS_START: "user:fetch-videos-start",
	FETCH_USER_VIDEOS_SUCCESS: "user:fetch-videos-success",
	FETCH_USER_VIDEOS_FAILURE: "user:fetch-videos-failure",
	SET_FEEDBACK: "user:set-feedback",

	//GET fetch single video for user
	FETCH_VIDEO_START: "user:fetch-video-start",
	FETCH_VIDEO_SUCCESS: "user:fetch-video-success",
	FETCH_VIDEO_FAILURE: "user:fetch-video-failure",

	//GET fetch users organizations
	FETCH_USER_ORGANIZATIONS_START: "user:fetch-user-organizations-start",
	FETCH_USER_ORGANIZATIONS_SUCCESS: "user:fetch-user-organizations-success",

	//Set selected organization
	SET_USER_SELECTED_ORGANIZATION_START: "user:set-user-organization-start",
	SET_USER_SELECTED_ORGANIZATION_SUCCESS: "user:set-user-organization-success",

	CREATE_USER_ORGANIZATION_START: "user:create_user_organization_start",
	CREATE_USER_ORGANIZATION_SUCCESS: "user:create_user_organization_success",

	//GET feedback on single user video
	FETCH_FEEDBACK_START: "user:fetch-feedback-start",
	FETCH_FEEDBACK_SUCCESS: "user:fetch-feedback-success",
	FETCH_FEEDBACK_FAILURE: "user:fetch-feedback-failure",

	SUBMIT_FEEDBACK_START: "user:submit-feedback-start",
	SUBMIT_FEEDBACK_SUCCESS: "user:submit-feedback-success",
	SUBMIT_FEEDBACK_FAILURE: "user:submit-feedback-failure",

	UPDATE_FEEDBACK_START: "user:update-feedback-start",
	UPDATE_FEEDBACK_SUCCESS: "user:update-feedback-success",
	UPDATE_FEEDBACK_FAILURE: "user:update-feedback-failure",

	// Update user data
	UPDATE_USER_DATA_START: "user:update-user-data-start",
	UPDATE_USER_DATA_SUCCESS: "user:update-user-data-success",
	UPDATE_USER_DATA_FAILURE: "user:update-user-data-failure",

	UPDATE_PROFILE_PICTURE_START: "user:update-profile-picture-start",
	UPDATE_PROFILE_PICTURE_SUCCESS: "user:update-profile-picture-success",
	UPDATE_PROFILE_PICTURE_FAILURE: "user:update-profile-picture-failure",
	UPDATE_PROFILE_PICTURE_PROGRESS: "user:update-profile-picture-progress",
	UPDATE_PROFILE_PICTURE_CLEAR: "user:update-profile-picture-clear",

	// Get user data
	FETCH_USER_DATA_START: "user:fetch-user-data-start",
	FETCH_USER_DATA_SUCCESS: "user:fetch-user-data-success",
	FETCH_USER_DATA_FAILURE: "user:fetch-user-data-failure",

	//TEAM CONSTANTS
	// POST create team
	CREATE_TEAM_START: "teams:create-team-start",
	CREATE_TEAM_SUCCESS: "teams:create-team-success",
	CREATE_TEAM_FAILURE: "teams:create-team-failure",

	//GET fetch team by id
	FETCH_TEAM_BY_ID_START: "team:fetch-teamById-start",
	FETCH_TEAM_BY_ID_SUCCESS: "team:fetch-teamById-success",
	FETCH_TEAM_BY_ID_FAILURE: "team:fetch-teamById-failure",

	//GET fetch team members
	FETCH_TEAM_MEMBERS_START: "team:fetch-team-members-start",
	FETCH_TEAM_MEMBERS_SUCCESS: "team:fetch-team-members-success",
	FETCH_TEAM_MEMBERS_FAILURE: "team:fetch-team-members-failure",

	//GET fetch team prompts
	FETCH_TEAM_PROMPTS_START: "team:fetch-team-prompts-start",
	FETCH_TEAM_PROMPTS_SUCCESS: "team:fetch-team-prompts-success",
	FETCH_TEAM_PROMPTS_FAILURE: "team:fetch-team-prompts-failure",

	//GET fetch team prompts and videos, complex nested arrays
	FETCH_TEAM_PROMPTS_AND_VIDEOS_START: "team:fetch-team-prompts-videos-start",
	FETCH_TEAM_PROMPTS_AND_VIDEOS_SUCCESS: "team:fetch-team-prompts-videos-success",
	FETCH_TEAM_PROMPTS_AND_VIDEOS_FAILURE: "team:fetch-team-prompts-videos-failure",

	//DELETE team member from a team
	DELETE_TEAM_MEMBER_START: "team:delete-team-member-start",
	DELETE_TEAM_MEMBER_SUCCESS: "team:delete-team-member-success",
	DELETE_TEAM_MEMBER_FAILURE: "team:delete-team-member-failure",

	//PUT update team member role
	UPDATE_TEAM_MEMBER_ROLE_START: "team:update_team_member_role_start",
	UPDATE_TEAM_MEMBER_ROLE_SUCCESS: "team:update_team_member_role_success",
	UPDATE_TEAM_MEMBER_ROLE_FAILURE: "team:update_team_member_role_failure",

	//PUT update org member role
	UPDATE_ORG_MEMBER_ROLE_START: "organization:update_org_member_role_start",
	UPDATE_ORG_MEMBER_ROLE_SUCCESS: "organization:update_org_member_role_success",
	UPDATE_ORG_MEMBER_ROLE_FAILURE: "organization:update_org_member_role_failure",

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
	POST_INVITE_LINK_FAILURE: "team:post-invite-link-failure",

	//Clear invite
	CLEAR_INVITE: "user:clear-invite",

	//GET fetch invite
	FETCH_INVITE_START: "team:fetch-invite-start",
	FETCH_INVITE_SUCCESS: "team:fetch-invite-success",
	FETCH_INVITE_FAILURE: "team:fetch-invite-failure",

	//ERRORS
	GENERATE_ERROR: "error:generate-error",
	CLEAR_ERROR: "error:clear-error",

	//VIDEO UPLOAD
	UPLOAD_VIDEO_START: "user:upload-video-start",
	UPLOAD_VIDEO_PROGRESS: "user:upload-progress",
	UPLOAD_VIDEO_SUCCESS: "user:upload-video-success",
	UPLOAD_VIDEO_FAILURE: "user:upload-video-failure",

	UPDATE_STREAM_OBJECT: "user:update-stream-object",
	UPDATE_STREAM_RAW: "user:update-stream-raw",

	TOGGLE_STREAM_PLAYBACK: "user:toggle-stream-playback",
	RESTART_RECORDING: "user:restart-recording",

	SET_STREAM_ERROR: "user:set-stream-error",

	FETCH_ORGANIZATION_TEAMS_START: "organization:fetch-organization-teams-start",
	FETCH_ORGANIZATION_TEAMS_SUCCESS: "organization:fetch-organization-teams-success",

	FETCH_ORGANIZATION_USERS_START: "organization:fetch-organization-users-start",
	FETCH_ORGANIZATION_USERS_SUCCESS: "organization:fetch-organization-users-success",

	DELETE_ORGANIZATION_USER_SUCCESS: "organization:delete-organization-users-success",

	//GET fetch video feedback scores
	FETCH_VIDEO_FEEDBACK: "user: fetch-video-feedback",
};

export default constants;
