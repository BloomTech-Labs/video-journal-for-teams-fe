import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token") || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU4MDkyNTQ5MiwiZXhwIjoxNTgwOTM2MjkyfQ.DJuoEccn7Srb8ArtNipNNpo6XP1GbrKLE45rHbpfHRs"

  return axios.create({
    baseURL: (function() {
      switch (process.env.REACT_APP_ENV) {
        case "development":
          return process.env.REACT_APP_LOCAL_HOST;
        case "staging":
          return process.env.REACT_APP_STAGING_URL;
        case "production":
          return process.env.REACT_APP_PRODUCTION_URL;
        default:
          return process.env.REACT_APP_LOCAL_HOST;
      }
    })(),
    headers: {
      // "Authorization": token,
      "Authorization": token,
      "Content-Type": "application/json",
    },
  });
};

export default AxiosWithAuth;