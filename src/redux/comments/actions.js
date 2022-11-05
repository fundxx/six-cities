import {STORE_COMMENTS} from "./action-types";

const storeComments = (comments, id) => {
  return {
    type: STORE_COMMENTS,
    payload: comments,
    meta: id,
  };
};

export {storeComments};
