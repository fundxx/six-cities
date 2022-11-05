import {
  STORE_HOTEL_DATA,
  STORE_OFFERS,
  CHANGE_SORT,
  UPDATE_OFFER,
  STORE_FAVORITE_DATA,
  STORE_NEARBY_OFFERS,
} from "./action-types";

export const initialState = {
  /** Данные выбранного варианта сортировки */
  sort: {
    label: `Popular`,
    value: `popular`,
  },
  /** Map - объект идентификаторов городов к массиву идентификаторов карточек предложений */
  offersIdsMap: {},
  /** Map - объект идентификаторов карточек предложений на данные карточек */
  offerCardsMap: {},
  /** Map - объект идентификаторов карточек предложений на список идентификаторов карточек соседних предложений */
  neightboursIdsMap: {},
  /** Map - объект идентификаторов городов к массиву идентификаторов избранных карточек предложений */
  favoritesOffersIdsMap: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_NEARBY_OFFERS:
      return {
        ...state,
        neightboursIdsMap: {
          ...state.neightboursIdsMap,
          [action.meta]: action.payload.offersIdsMap,
        },
        offerCardsMap: {
          ...state.offerCardsMap,
          ...action.payload.offerCardsMap,
        },
      };
    case STORE_FAVORITE_DATA:
      return {
        ...state,
        offerCardsMap: {
          ...state.offerCardsMap,
          ...action.payload.offerCardsMap,
        },
        favoritesOffersIdsMap: {
          ...state.favoritesOffersIdsMap,
          ...action.payload.favoritesOffersIdsMap,
        },
      };
    case STORE_HOTEL_DATA:
      return {
        ...state,
        offersIdsMap: action.payload.offersIdsMap,
        offerCardsMap: action.payload.offerCardsMap,
      };
    case STORE_OFFERS:
      return {
        ...state,
        offersIdsMap: {
          ...state.offersIdsMap,
          ...action.payload.offersIdsMap,
        },
        offerCardsMap: {
          ...state.offerCardsMap,
          ...action.payload.offerCardsMap,
        },
      };
    case UPDATE_OFFER:
      return {
        ...state,
        offerCardsMap: {
          ...state.offerCardsMap,
          [action.meta]: action.payload,
        },
      };
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};
