import {
  CHANGE_SORT,
  STORE_HOTEL_DATA,
  STORE_OFFERS,
  UPDATE_OFFER,
  STORE_FAVORITE_DATA,
  STORE_NEARBY_OFFERS,
} from "./action-types";

const changeSort = (sort) => {
  return {
    type: CHANGE_SORT,
    payload: sort,
  };
};

const storeHotelData = ({city, cities, offersIdsMap, offerCardsMap}) => {
  return {
    type: STORE_HOTEL_DATA,
    payload: {
      city,
      cities,
      offersIdsMap,
      offerCardsMap,
    },
  };
};

const storeOffers = (offersIdsMap, offerCardsMap) => {
  return {
    type: STORE_OFFERS,
    payload: {
      offersIdsMap,
      offerCardsMap,
    },
  };
};

const updateOffer = (offer, id) => {
  return {
    type: UPDATE_OFFER,
    payload: offer,
    meta: id,
  };
};

const storeFavoriteData = ({cities, favoritesOffersIdsMap, offerCardsMap}) => {
  return {
    type: STORE_FAVORITE_DATA,
    payload: {
      cities,
      favoritesOffersIdsMap,
      offerCardsMap,
    },
  };
};

const storeNearbyOffers = ({offersIdsMap, offerCardsMap}, id) => {
  return {
    type: STORE_NEARBY_OFFERS,
    payload: {
      offersIdsMap,
      offerCardsMap,
    },
    meta: id,
  };
};

export {
  changeSort,
  storeHotelData,
  storeOffers,
  updateOffer,
  storeFavoriteData,
  storeNearbyOffers,
};
