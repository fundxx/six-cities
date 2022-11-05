const AUTH_STORE_KEY = `auth`;

function getAuthStore(state) {
  return state[AUTH_STORE_KEY] || {};
}

function getAuthStatus(state) {
  return getAuthStore(state).auth;
}

function getUserData(state, fieldName) {
  return fieldName ? getAuthStore(state).user[fieldName] : getAuthStore(state).user;
}

export {
  AUTH_STORE_KEY,
  getAuthStore,
  getAuthStatus,
  getUserData,
};
