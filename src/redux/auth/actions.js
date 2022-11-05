import {
  CHANGE_AUTH_STATUS,
  STORE_USER_DATA,
  REDIRECT_TO_ROUTE,
} from "./action-types";

const changeAuthStatus = (value) => {
  return {type: CHANGE_AUTH_STATUS, payload: value};
};

const storeUserData = (data) => {
  return {type: STORE_USER_DATA, payload: data};
};

const redirectToRoute = (url) => {
  return {
    type: REDIRECT_TO_ROUTE,
    payload: url,
  };
};

export {
  changeAuthStatus,
  storeUserData,
  redirectToRoute,
};
