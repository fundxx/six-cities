import reducer, {initialState} from "./reducer";
import {
  appendNotification,
  removeNotification,
} from "./actions";

describe(`Notice reducer work correctly`, () => {
  const notice = {
    type: `error`,
    id: `1`,
    message: `test`,
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should append notice`, () => {
    expect(reducer(initialState, appendNotification(notice))).toEqual({
      ...initialState,
      items: [notice],
    });
  });

  it(`Reducer should remove notice by "id"`, () => {
    expect(reducer({items: [notice]}, removeNotification(`1`))).toEqual({
      items: [],
    });
  });
});
