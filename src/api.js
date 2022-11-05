import axios from "axios";

const BASE_URL = `https://6.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const createAPI = (onAuth) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onAuth();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
