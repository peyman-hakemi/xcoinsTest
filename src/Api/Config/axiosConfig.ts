import axios from 'axios';
import {importantKeys} from './importantKey';

const http = axios.create({
  baseURL: importantKeys.API_URL,
  timeout: importantKeys.TIME_OUT,
  headers: {'Content-Type': 'application/json'},
});

http.interceptors.request.use(
  async config => {
    return config;
  },
  error => {
    Promise.reject(error);
  },
);
http.interceptors.response.use(
  response => {
    // console.log({AXIOS_RESULT: response});
    return response;
  },
  async function (error) {
    // console.log({AXIOS_ERROR: error});
    throw error;
  },
);
export default http;
