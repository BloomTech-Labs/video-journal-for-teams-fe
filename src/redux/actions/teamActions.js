import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const createTeam = (newTeam, history) => (dispatch) => {
	dispatch({ type: constants.CREATE_TEAM_START });
	AxiosWithAuth()
		.post('/teams/', newTeam)
		.then(res => {
			dispatch({ type: constants.CREATE_TEAM_SUCCESS, payload: res.data })
			history.push(`/teams/${res.data.id}`);
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: "An error occurred, try again later." }));
}

export const fetchTeamById = (team_id) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_BY_ID_START })
	AxiosWithAuth()
		.get(`/teams/${team_id}`)
		.then(teamResponse => {
			dispatch({ type: constants.FETCH_TEAM_BY_ID_SUCCESS, payload: teamResponse.data })
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const fetchTeamMembers = (team_id) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_MEMBERS_START })
	AxiosWithAuth()
		.get(`/teams/${team_id}/users`)
		.then(teamMembersResponse => {
			dispatch({ type: constants.FETCH_TEAM_MEMBERS_SUCCESS, payload: teamMembersResponse.data })
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const fetchTeamPrompts = (team_id) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_PROMPTS_START })
	AxiosWithAuth()
		.get(`/teams/${team_id}/prompts`)
		.then(teamPromptsResponse => {
			dispatch({ type: constants.FETCH_TEAM_PROMPTS_SUCCESS, payload: teamPromptsResponse.data })
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const fetchTeamVideos = (team_id) => (dispatch) => {
	dispatch({ type: constants.FETCH_TEAM_PROMPTS_AND_VIDEOS_START })
	AxiosWithAuth()
		.get(`/teams/${team_id}/videos`)
		.then(teamVideosResponse => {
			dispatch({ type: constants.FETCH_TEAM_PROMPTS_AND_VIDEOS_SUCCESS, payload: teamVideosResponse.data })
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const deleteTeamMember = (team_id, user_id) => (dispatch) => {
	dispatch({ type: constants.DELETE_TEAM_MEMBER_START })
	AxiosWithAuth()
		.delete(`/teams/${team_id}/users/${user_id}`)
		.then(removedMemberResponse => {
			dispatch({ type: constants.DELETE_TEAM_MEMBER_SUCCESS, payload: { count: removedMemberResponse.data.count, user_id: user_id } })
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const createInvite = (team_id, team_name) => (dispatch) => {
	dispatch({ type: constants.POST_INVITE_LINK_START })
	AxiosWithAuth()
		.post(`teams/invite/${team_id}`, team_name)
		.then(inviteResponse => {
			console.log("Action response", inviteResponse)
			dispatch({ type: constants.POST_INVITE_LINK_SUCCESS, payload: inviteResponse.data })
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

export const createPrompt = (prompt, team_id) => (dispatch) => {
	dispatch({ type: constants.POST_TEAM_PROMPT_START })
	AxiosWithAuth()
		.post(`teams/${team_id}/prompts`, prompt)
		.then(promptResponse => {
			dispatch({ type: constants.POST_TEAM_PROMPT_SUCCESS, payload: promptResponse.data })
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

//Update user role.
export const updateUserRole = (team_id, user_id, role_id) => dispatch => {
	dispatch({ type: constants.UPDATE_TEAM_MEMBER_ROLE_START });

	const changes = {
		role_id: role_id
	}

	AxiosWithAuth().put(`/teams/${team_id}/users/${user_id}/role`, changes)
		.then(updateResponse => {
			dispatch({ type: constants.UPDATE_TEAM_MEMBER_ROLE_SUCCESS, payload: updateResponse.data.updatedRole });
		})
		.catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: err }));
}

// SET AN ERROR
export const setError = (errorMessage) => (dispatch) => {
	dispatch({ type: constants.GENERATE_ERROR, payload: errorMessage });
};

// CLEAR AN ERROR
export const clearError = () => (dispatch) => {
	dispatch({ type: constants.CLEAR_ERROR, payload: null });
};
