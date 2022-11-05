import reducer, {initialState} from "./reducer";
import {
  changeAuthStatus,
  storeUserData,
} from "./actions";

describe(`Auth reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change auth status by a given value`, () => {
    expect(reducer(initialState, changeAuthStatus(true))).toEqual({
      ...initialState,
      auth: true,
    });
  });

  it(`Reducer should store user data by a given value`, () => {
    const user = {name: `John Doe`};

    expect(reducer(initialState, storeUserData(user))).toEqual({
      ...initialState,
      user,
    });
  });
});
