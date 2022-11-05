import {v4 as uuid} from "uuid";

import {actions} from "../notifications";
import {
  toReducerOffersCards,
} from "./utils";
import {
  storeHotelData,
  updateOffer,
  storeFavoriteData,
  storeNearbyOffers,
} from "./actions";
import {
  getOfferCardsMap,
  getNeightboursIdsMap,
} from "./selectors";

function fetchOffersList() {
  return (dispatch, _getState, api) => {
    return api.get(`/hotels`).then(({data}) => {
      const {cities, offersIdsMap, offerCardsMap} = toReducerOffersCards(data);
      const [city] = cities;

      dispatch(storeHotelData({cities, city, offersIdsMap, offerCardsMap}));
    });
  };
}

function updateOfferCard(id) {
  return (dispatch, getState, api) => {
    const state = getState();
    const items = getOfferCardsMap(state);
    const item = items[id];

    if (item) {
      return Promise.resolve().then(() => dispatch(updateOffer(item)));
    }

    return api.get(`/hotels/${id}`).then(({data}) => {
      dispatch(updateOffer({
        ...data,
        host: {
          ...data.host,
          avatarUrl: data.host[`avatar_url`],
          isPro: data.host[`is_pro`],
        },
        isFavorite: data[`is_favorite`],
        isPremium: data[`is_premium`],
        maxAdults: data[`max_adults`],
        previewImg: data[`preview_image`],
      }, id));
    })
    .catch((error) => {
      dispatch(actions.appendNotification({
        message: error.message,
        type: `error`,
        id: uuid(),
      }));
    });
  };
}

function changeFavoriteStatus(id) {
  return (dispatch, getState, api) => {
    const state = getState();
    const items = getOfferCardsMap(state);
    const item = items[id] || {};
    const status = item.isFavorite ? 0 : 1;

    return api.post(`favorite/${id}/${status}`).then(({data}) => {
      dispatch(updateOffer({
        ...item,
        isFavorite: data[`is_favorite`],
      }, id));
    })
    .catch((error) => {
      dispatch(actions.appendNotification({
        message: error.message,
        type: `error`,
        id: uuid(),
      }));
    });
  };
}

function fetchFavorites() {
  return (dispatch, _getState, api) => {
    return api.get(`/favorite`).then(({data}) => {
      const {favoriteCities: cities, favoritesOffersIdsMap, offerCardsMap} = toReducerOffersCards(data);

      dispatch(storeFavoriteData({cities, favoritesOffersIdsMap, offerCardsMap}));
    });
  };
}

function fetchNearbyOffers(id) {
  return (dispatch, getState, api) => {
    const state = getState();
    const items = getNeightboursIdsMap(state);
    const item = items[id];

    if (item) {
      return Promise.resolve();
    }

    return api.get(`hotels/${id}/nearby`)
      .then(({data}) => {
        const {offersIdsMap, offerCardsMap, cities} = toReducerOffersCards(data);
        const [city] = cities;

        dispatch(storeNearbyOffers({offersIdsMap: offersIdsMap[city.id], offerCardsMap}, id));
      })
      .catch((error) => {
        dispatch(actions.appendNotification({
          message: error.message,
          type: `error`,
          id: uuid(),
        }));
      });
  };
}

export {
  fetchOffersList,
  updateOfferCard,
  changeFavoriteStatus,
  fetchFavorites,
  fetchNearbyOffers,
};
