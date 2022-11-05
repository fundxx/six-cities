import browserHistory from "Project/browser-history";
import {actionTypes} from "Project/redux/auth";

const redirect = (_state) => {
  return (dispatch) => {
    return (action) => {
      if (action.type === actionTypes.REDIRECT_TO_ROUTE) {
        browserHistory.push(action.payload);
      }

      return dispatch(action);
    };
  };
};

export {redirect};
