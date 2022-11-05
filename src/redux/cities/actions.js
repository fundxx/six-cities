import {
  SELECT_CITY,
  STORE_CITIES,
} from "./action-types";

const selectCity = (city) => {
  return {
    type: SELECT_CITY,
    payload: city
  };
};

const storeCities = (cities) => {
  return {
    type: STORE_CITIES,
    payload: cities
  };
};

export {
  selectCity,
  storeCities,
};
