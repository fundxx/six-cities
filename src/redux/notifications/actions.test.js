import {
  appendNotification,
  removeNotification,
} from "./actions";
import {
  APPEND_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "./action-types";

describe(`Notifications action creators work correctly`, () => {
  it(`Action creator for append notice returns correct action`, () => {
    const notice = {
      id: `1`,
      type: `error`,
      message: `Internal server error`,
    };
    const expectedAction = {
      type: APPEND_NOTIFICATION,
      payload: notice,
    };

    expect(appendNotification(notice)).toEqual(expectedAction);
  });

  it(`Action creator for remove notice returns correct action`, () => {
    const expectedAction = {
      type: REMOVE_NOTIFICATION,
      meta: `1`,
    };

    expect(removeNotification(`1`)).toEqual(expectedAction);
  });
});
