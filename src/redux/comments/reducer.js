import {STORE_COMMENTS} from "./action-types";

export const initialState = {
  /** Map - объект идентификаторов предложений на список комментариев */
  commentsMap: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_COMMENTS:
      return {
        ...state,
        commentsMap: {
          ...state.commentsMap,
          [action.meta]: action.payload,
        },
      };
    default:
      return state;
  }
};
