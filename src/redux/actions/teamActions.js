import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const fetchTeams = () => (dispatch) => {
    dispatch({ type: constants.FETCH_TEAMS_START });
    AxiosWithAuth()
    .get('/api/teams')
    .then(res => dispatch({ type: constants.FETCH_TEAMS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: constants.FETCH_TEAMS_FAILURE, payload: err }));
}