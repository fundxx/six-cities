import {v4 as uuid} from "uuid";

import {actions} from "../notifications";
import {storeComments} from "./actions";
import {toReducerComments} from "./utils";
import {getCommentsMap} from "./selectors";

function fetchCommentsList(id) {
  return (dispatch, getState, api) => {
    const state = getState();
    const commentsMap = getCommentsMap(state);
    const comment = commentsMap[id];

    if (comment) {
      return Promise.resolve();
    }

    return api.get(`/comments/${id}`)
      .then(({data}) => {
        const comments = toReducerComments(data);

        dispatch(storeComments(comments, id));
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

function appendUserComment(id, comment, rating) {
  return (dispatch, _getState, api) => {
    return api.post(`/comments/${id}`, {comment, rating})
      .then(({data}) => {
        const comments = toReducerComments(data);

        dispatch(storeComments(comments, id));
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
  fetchCommentsList,
  appendUserComment,
};
