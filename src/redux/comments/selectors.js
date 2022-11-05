const COMMENTS_STORE_KEY = `comments`;

function getCommentsState(state) {
  return state[COMMENTS_STORE_KEY] || {};
}

function getCommentsMap(state) {
  return getCommentsState(state).commentsMap;
}

export {
  COMMENTS_STORE_KEY,
  getCommentsState,
  getCommentsMap,
};
