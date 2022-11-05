import {storeComments} from "./actions";
import {STORE_COMMENTS} from "./action-types";

describe(`Comments actions creators work correctly`, () => {
  it(`Action creator for store comments returns correct action`, () => {
    const comments = [
      {
        id: 1,
        user: {},
        rating: 2,
        comment: `test`,
        date: ``,
      },
      {
        id: 2,
        user: {},
        rating: 3,
        comment: `test`,
        date: ``,
      },
    ];
    const expectedAction = {
      type: STORE_COMMENTS,
      payload: comments,
      meta: 1,
    };

    expect(storeComments(comments, 1)).toEqual(expectedAction);
  });
});
