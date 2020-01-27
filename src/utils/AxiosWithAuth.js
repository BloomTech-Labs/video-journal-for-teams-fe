import axios from 'axios';

const AxiosWithAuth = () => {
  const token = localStorage.getItem('token');
  
  return axios.create({
    //baseURL: 'add back end URL',
    headers: {
      Authorization: token
    }
  });
};

export default AxiosWithAuth;