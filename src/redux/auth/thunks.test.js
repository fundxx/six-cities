import MockAdapter from "axios-mock-adapter";

import {createAPI} from "Project/api";

import {actions} from "../notifications";
import {
  login,
  logout,
  checkAuth,
} from "./thunks";
import {
  changeAuthStatus,
  storeUserData,
  redirectToRoute,
} from "./actions";

const api = createAPI(() => {});

describe(`Auth thunks should work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({email: `test@test.com`, password: `test123`});

    apiMock
      .onPost(`/login`)
      .reply(200, {});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, changeAuthStatus(true));

        expect(dispatch).toHaveBeenNthCalledWith(2, storeUserData({}));

        expect(dispatch).toHaveBeenNthCalledWith(3, redirectToRoute(`/`));
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.appendNotification({}));
      });
  });

  it(`Should make a correct API call to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onGet(`/logout`)
      .reply(200, {});

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, changeAuthStatus(false));
        expect(dispatch).toHaveBeenNthCalledWith(2, redirectToRoute(`/login`));
      });
  });

  it(`Should make a correct API call to /login for check auth`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {});

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, changeAuthStatus(true));
        expect(dispatch).toHaveBeenNthCalledWith(2, storeUserData({}));
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.appendNotification({}));
      });
  });
});
