import {actions} from "Project/redux/auth";

import {redirect} from "./middleware";

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path) {
    this.location.pathname = path;
  }
};

jest.mock(`Project/browser-history`, () => fakeHistory);

describe(`Custom middleware works correctly`, () => {
  it(`Action passes to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = actions.redirectToRoute(`/`);

    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Redirect route should be added to fakeHistory`, () => {
    const {invoke} = mockRedux();

    invoke(actions.redirectToRoute(`/login`));

    expect(fakeHistory.location.pathname).toBe(`/login`);

    invoke(actions.redirectToRoute(`/lose`));

    expect(fakeHistory.location.pathname).toBe(`/lose`);
  });

  it(`Non redirect because bad action`, () => {
    const url = `/test-url`;
    const {invoke} = mockRedux();

    invoke({type: `TEST_ACTION`, payload: url});

    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
