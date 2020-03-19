import io from 'socket.io-client';


const host = function() {
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
  };
const ENDPOINT = host();

const socket = io(ENDPOINT);

socket.on('connect', () => {
    
} )

export function establishSocketConnect(){
    socket.on('connected', (data)=> {
        console.log(data);
    })
}

  