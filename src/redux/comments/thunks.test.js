import MockAdapter from "axios-mock-adapter";

import {createAPI} from "Project/api";

import {actions} from "../notifications";
import {
  fetchCommentsList,
  appendUserComment,
} from "./thunks";
import {storeComments} from "./actions";

const api = createAPI(() => {});

describe(`Comments thunks should work correctly`, () => {
  it(`Should make a correct API call without comments to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const cardId = 1;
    const fetchCommentsListLoader = fetchCommentsList(cardId);
    const state = {
      comments: {
        commentsMap: {},
      },
    };

    apiMock
    .onGet(`/comments/${cardId}`)
    .reply(200, []);

    return fetchCommentsListLoader(dispatch, () => state, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, storeComments([], cardId));
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.appendNotification({}));
      });
  });

  it(`Should make a correct API call with comments to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentLoader = fetchCommentsList(1);
    const state = {
      comments: {
        commentsMap: {
          1: [],
        },
      },
    };

    apiMock
    .onGet(`/comments/1`)
    .reply(200, {});

    return commentLoader(dispatch, () => state, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(0);
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.appendNotification({}));

        expect(dispatch).toHaveBeenNthCalledWith(1, storeComments([], 1));
      });
  });

  it(`Should make a correct API call to /comments/:id for create comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const cardId = 1;
    const comment = `test`;
    const rating = 4;
    const appendUserCommentLoader = appendUserComment(cardId, comment, rating);

    apiMock
    .onPost(`/comments/1`)
    .reply(200, []);

    return appendUserCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.appendNotification({}));

        expect(dispatch).toHaveBeenNthCalledWith(1, storeComments([], cardId));
      });
  });
});

// Auth thunks should work correctly
// oShould make a correct API call to /lgin
// expect(dispatch).toHaveBeenCalledTimes(3);
// expect(dispatch).toHaveBeenNthCalledWith(1, changeAuthStatus(true));
