import constants from "../constants";
import { AxiosWithAuth } from '../../components/utils/AxiosWithAuth';

//EXAMPLE
export const demoAction = () => (dispatch) => {
    dispatch({
      type: constants.DEMO_CONSTANT,
      payload: {
        ["some-data", "some-more-data"],
      },
    });
  };

export const fetchTeams = () => (dispatch) => {
    dispatch({ type: FETCH_TEAMS_START });
    AxiosWithAuth()
    .get('/teams')
    .then(res => dispatch({ type: FETCH_TEAMS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_TEAMS_FAILURE, payload: err }));
}