import reducer, {initialState} from "./reducer";
import {storeComments} from "./actions";

describe(`Comments reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should store comments`, () => {
    expect(reducer(initialState, storeComments({id: 1}, 1))).toEqual({
      ...initialState,
      commentsMap: {
        1: {id: 1},
      },
    });
  });
});
