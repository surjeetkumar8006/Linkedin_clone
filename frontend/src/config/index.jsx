// axios config file (axios.js ya axiosConfig.js)

import axios from 'axios';

const clientServer = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ THIS IS IMPORTANT:
clientServer.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.params = config.params || {}; // if params does not exist, create it
      config.params.token = token;         // add token inside params
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clientServer;
