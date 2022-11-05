import {actionTypes} from "../offers";
import {SELECT_CITY} from "./action-types";

export const initialState = {
  /** Список гороов */
  cities: [],
  /** Данные выбранного города */
  selectedCity: {},
  /** Список городов у которых карточки предложений добавленны в избранное */
  favoriteCities: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case actionTypes.STORE_FAVORITE_DATA:
      return {
        ...state,
        favoriteCities: action.payload.cities,
      };
    case actionTypes.STORE_HOTEL_DATA:
      return {
        ...state,
        cities: action.payload.cities,
        selectedCity: action.payload.city,
      };
    default:
      return state;
  }
};
