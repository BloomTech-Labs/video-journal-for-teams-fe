import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const fetchOrganizationTeams = (orgId) => (dispatch) => {
	dispatch({ type: constants.FETCH_ORGANIZATION_TEAMS_START });
	AxiosWithAuth()
		.get(`/v2/organizations/${orgId}/teams`)
		.then((res) => {
			dispatch({ type: constants.FETCH_ORGANIZATION_TEAMS_SUCCESS, payload: res.data });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const fetchOrganizationUsers = (orgId) => (dispatch) => {
	dispatch({ type: constants.FETCH_ORGANIZATION_USERS_START });
	AxiosWithAuth()
		.get(`/v2/organizations/${orgId}/users`)
		.then((res) => {
			dispatch({ type: constants.FETCH_ORGANIZATION_USERS_SUCCESS, payload: res.data });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const deleteOrganizationUser = (orgId, userId) => (dispatch) => {
	dispatch({ type: constants.FETCH_ORGANIZATION_USERS_START });

	AxiosWithAuth()
		.delete(`/v2/organizations/${orgId}/users`, {
			data: { user_id: userId },
		})
		.then((res) => {
			dispatch({ type: constants.DELETE_ORGANIZATION_USER_SUCCESS, payload: userId });
		})
		.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

export const updateUserRole = (organization_id, user_id, role_id) => (dispatch) => {
	dispatch({ type: constants.UPDATE_ORG_MEMBER_ROLE_START });

	const changes = {
		role_id: role_id,
	};

	return AxiosWithAuth()
		.put(`/organizations/${organization_id}/users/${user_id}/role`, changes)
		.then((updateResponse) => {
			dispatch({ type: constants.UPDATE_ORG_MEMBER_ROLE_SUCCESS, payload: updateResponse.data.updatedRole });
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
