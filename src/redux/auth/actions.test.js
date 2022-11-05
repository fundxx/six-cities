import {
  changeAuthStatus,
  storeUserData,
  redirectToRoute,
} from "./actions";
import {
  CHANGE_AUTH_STATUS,
  STORE_USER_DATA,
  REDIRECT_TO_ROUTE,
} from "./action-types";

describe(`Auth action creators work correctly`, () => {
  it(`Action creator for change auth status returns correct action`, () => {
    const expectedAction = {
      type: CHANGE_AUTH_STATUS,
      payload: true,
    };

    expect(changeAuthStatus(true)).toEqual(expectedAction);
  });

  it(`Action creator for store user data returns correct action`, () => {
    const data = {
      id: 1,
      email: `v.tkachev@credinform.ru`,
      name: `v.tkachev`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
      isPro: false,
    };
    const expectedAction = {
      type: STORE_USER_DATA,
      payload: data,
    };

    expect(storeUserData(data)).toEqual(expectedAction);
  });

  it(`Action creator fro redirect to route returns correct action`, () => {
    const expectedAction = {
      type: REDIRECT_TO_ROUTE,
      payload: `/`,
    };

    expect(redirectToRoute(`/`)).toEqual(expectedAction);
  });
});
