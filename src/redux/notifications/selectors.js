const NOTIFICATIONS_STORE_KEY = `notifications`;

function getNotifications(state) {
  return state[NOTIFICATIONS_STORE_KEY] || {};
}

function getNoticeItems(state) {
  return getNotifications(state).items;
}

export {
  NOTIFICATIONS_STORE_KEY,
  getNotifications,
  getNoticeItems,
};
