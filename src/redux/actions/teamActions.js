import constants from "../constants";
import AxiosWithAuth from "../../components/utils/AxiosWithAuth";

export const createTeam = (newTeam, history) => (dispatch) => {
    dispatch({ type: constants.CREATE_TEAM_START });
    AxiosWithAuth()
    .post('/teams/', newTeam)
    .then(res => {
        dispatch({ type: constants.CREATE_TEAM_SUCCESS, payload: res.data })
        console.log(res)
        history.push(`/teams/${res.data.id}`);
    })
    .catch(err => dispatch({ type: constants.GENERATE_ERROR, payload: "An error occurred, try again later." }));
}