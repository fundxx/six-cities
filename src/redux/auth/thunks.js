import {v4 as uuid} from "uuid";

import {actions} from "../notifications";
import {
  changeAuthStatus,
  storeUserData,
  redirectToRoute,
} from "./actions";

function login({login: email, password}) {
  return (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then(({data}) => {
        dispatch(changeAuthStatus(true));
        dispatch(storeUserData({
          ...data,
          avatarUrl: data[`avatar_url`],
          isPro: data[`is_pro`],
        }));
      })
      .then(() => dispatch(redirectToRoute(`/`)))
      .catch((error) => {
        dispatch(actions.appendNotification({
          message: error.message,
          type: `error`,
          id: uuid(),
        }));
      });
  };
}

function logout() {
  return (dispatch, _getState, api) => {
    return api.get(`/logout`)
      .then(() => dispatch(changeAuthStatus(false)))
      .then(() => dispatch(redirectToRoute(`/login`)));
  };
}

function checkAuth() {
  return (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(changeAuthStatus(true));
        dispatch(storeUserData({
          ...data,
          avatarUrl: data[`avatar_url`],
          isPro: data[`is_pro`],
        }));
      })
      .catch((error) => {
        dispatch(actions.appendNotification({
          message: error.message,
          type: `error`,
          id: uuid(),
        }));
      });
  };
}

export {
  login,
  logout,
  checkAuth,
};
