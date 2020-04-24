import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const fetchOrganizationTeams = (orgId) => (dispatch) => {
	dispatch({type: constants.FETCH_ORGANIZATION_TEAMS_START});
	AxiosWithAuth()
	.get(`/organizations/${orgId}/teams`)
	.then((res) => {
		dispatch({ type: constants.FETCH_ORGANIZATION_TEAMS_SUCCESS, payload: res.data });
	})
	.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};


export const fetchOrganizationUsers = (orgId) => (dispatch) => {
	dispatch({type: constants.FETCH_ORGANIZATION_USERS_START});
	AxiosWithAuth()
	.get(`/organizations/${orgId}/users`)
	.then((res) => {
		dispatch({ type: constants.FETCH_ORGANIZATION_USERS_SUCCESS, payload: res.data });
	})
	.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};


export const deleteOrganizationUser = (orgId, userId) => (dispatch) => {
    dispatch({type: constants.FETCH_ORGANIZATION_USERS_START});
    console.log(orgId, userId)
	AxiosWithAuth()
    .delete(`/organizations/${orgId}/users`,  {
        data: { user_id: userId }
       })
	.then((res) => {
        console.log('dddd',userId)
		dispatch({ type: constants.DELETE_ORGANIZATION_USER_SUCCESS, payload: userId});
	})
	.catch((err) => dispatch({ type: constants.GENERATE_ERROR, payload: err.response }));
};

