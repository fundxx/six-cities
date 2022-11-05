import {
  APPEND_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "./action-types";

export const initialState = {
  /** Список уведомлений */
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPEND_NOTIFICATION:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        items: state.items.filter((it) => it.id !== action.meta),
      };
    default:
      return state;
  }
};
