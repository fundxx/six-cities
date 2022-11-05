import {
  APPEND_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "./action-types";

const appendNotification = (notification) => {
  return {
    type: APPEND_NOTIFICATION,
    payload: notification,
  };
};

const removeNotification = (id) => {
  return {
    type: REMOVE_NOTIFICATION,
    meta: id,
  };
};

export {
  appendNotification,
  removeNotification,
};
