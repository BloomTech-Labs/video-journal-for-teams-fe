import constants from "../constants";
import axios from "axios";
// import { axiosWithAuth } from 'axiosWithAuth';

export const demoAction = () => (dispatch) => {
  dispatch({
    type: constants.DEMO_CONSTANT,
    payload: {
      ["some-data", "some-more-data"],
    },
  });
};
