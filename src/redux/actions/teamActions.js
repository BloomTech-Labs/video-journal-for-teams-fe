import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const createTeam = (newTeam, history, id) => (dispatch) => {
	dispatch({ type: constants.CREATE_TEAM_START });
	AxiosWithAuth()
		.post("/v2/teams/", { team: newTeam, id })
		.then((res) => {
			dispatch({ type: constants.CREATE_TEAM_SUCCESS, payload: res.data });
			history.push("/user-dashboard");
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const fetchTeamById = (team_id) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_BY_ID_START });
	AxiosWithAuth()
		.get(`/v2/teams/${team_id}`)
		.then((teamResponse) => {
			dispatch({ type: constants.FETCH_TEAM_BY_ID_SUCCESS, payload: teamResponse.data });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const fetchTeamMembers = (team_id) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_MEMBERS_START });
	AxiosWithAuth()
		.get(`/v2/teams/${team_id}/users`)
		.then((teamMembersResponse) => {
			dispatch({ type: constants.FETCH_TEAM_MEMBERS_SUCCESS, payload: teamMembersResponse.data });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const fetchTeamPrompts = (team_id) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_PROMPTS_START });
	AxiosWithAuth()
		.get(`/teams/${team_id}/prompts`)
		.then((teamPromptsResponse) => {
			dispatch({ type: constants.FETCH_TEAM_PROMPTS_SUCCESS, payload: teamPromptsResponse.data });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const fetchTeamVideos = (team_id, history) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_PROMPTS_AND_VIDEOS_START });
	AxiosWithAuth()
		.get(`/v2/teams/${team_id}/videos`)
		.then((teamVideosResponse) => {
			dispatch({ type: constants.FETCH_TEAM_PROMPTS_AND_VIDEOS_SUCCESS, payload: teamVideosResponse.data });
		})
		.catch((err) => {
			dispatch({ type: constants.GENERATE_ERROR, payload: err.response });
		});
};

export const deleteTeamMember = (team_id, user_id) => (dispatch) => {
	dispatch({ type: constants.DELETE_TEAM_MEMBER_START });
	AxiosWithAuth()
		.delete(`/v2/teams/${team_id}/users/${user_id}`)
		.then((removedMemberResponse) => {
			dispatch({
				type: constants.DELETE_TEAM_MEMBER_SUCCESS,
				payload: { count: removedMemberResponse.data.count, user_id: user_id },
			});
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const createInvite = (team_id, team_name, org_id, user_id) => (dispatch) => {
	dispatch({ type: constants.POST_INVITE_LINK_START });

	const objj = {
		team_id: team_id,
		team_name: team_name,
		org_id: org_id,
	};

	AxiosWithAuth()
		.post(`/v2/teams/${team_id}/invite/${user_id}`, objj)
		.then((inviteResponse) => {
			dispatch({ type: constants.POST_INVITE_LINK_SUCCESS, payload: inviteResponse.data.link });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const createPrompt = (prompt, team_id, user_id) => (dispatch) => {
	dispatch({ type: constants.POST_TEAM_PROMPT_START });
	AxiosWithAuth()
		.post(`/v2/teams/${team_id}/prompts/${user_id}`, prompt)
		.then((promptResponse) => {
			dispatch({ type: constants.POST_TEAM_PROMPT_SUCCESS, payload: promptResponse.data });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

//Update user role.
export const updateUserRole = (team_id, user_id, role_id) => (dispatch) => {
	dispatch({ type: constants.UPDATE_TEAM_MEMBER_ROLE_START });

	const changes = {
		role_id: role_id,
	};
	return AxiosWithAuth()
		.put(`/teams/${team_id}/users/${user_id}/role`, changes)
		.then((updateResponse) => {
			dispatch({ type: constants.UPDATE_TEAM_MEMBER_ROLE_SUCCESS, payload: updateResponse.data.updatedRole });

			return updateResponse.data;
		})
		.catch((err) => {
			dispatch({ type: constants.GENERATE_ERROR, payload: err.response });
		});
};

// SET AN ERROR
export const setError = (errorMessage) => (dispatch) => {
	dispatch({ type: constants.GENERATE_ERROR, payload: errorMessage });
};

// CLEAR AN ERROR
export const clearError = () => (dispatch) => {
	dispatch({ type: constants.CLEAR_ERROR, payload: null });
};

//update team info
export const updateTeam = (team_info) => {
	return {
		type: constants.FETCH_UPDATED_TEAM,
		payload: team_info,
	};
};
