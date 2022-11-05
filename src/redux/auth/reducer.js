import {
  CHANGE_AUTH_STATUS,
  STORE_USER_DATA,
} from "./action-types";

export const initialState = {
  /** Статус авторизации пользователя */
  auth: false,
  /** Данные зарегестрированного пользователя */
  user: {
    /** Путь до аватарки */
    avatarUrl: ``,
    /** email */
    email: ``,
    /** Идентификатор */
    id: null,
    /** Статус пользователя */
    isPro: null,
    /** Имя пользователя */
    name: ``,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH_STATUS:
      return {
        ...state,
        auth: action.payload,
      };
    case STORE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
