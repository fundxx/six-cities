import {combineReducers} from "redux";

import cities, {selectors as citiesSelectors} from "./cities";
import offers, {selectors as offersSelectors} from "./offers";
import notifications, {selectors as noticeSelectors} from "./notifications";
import auth, {selectors as authSelectors} from "./auth";
import comments, {selectors as commentSelectors} from "./comments";

export default combineReducers({
  [citiesSelectors.CITIES_STORE_KEY]: cities,
  [offersSelectors.OFFERS_STORE_KEY]: offers,
  [noticeSelectors.NOTIFICATIONS_STORE_KEY]: notifications,
  [authSelectors.AUTH_STORE_KEY]: auth,
  [commentSelectors.COMMENTS_STORE_KEY]: comments,
});
