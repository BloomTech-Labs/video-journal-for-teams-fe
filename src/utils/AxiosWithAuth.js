import axios from 'axios';

const AxiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  return axios.create({
    baseURL: REACT_APP_APP_ENV === "development" ? process.env.REACT_APP_STAGING_URL : REACT_APP_PRODUCTION_URL,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
  });
};

export default AxiosWithAuth;