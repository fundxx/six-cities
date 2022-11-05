import {createSelector} from "reselect";

import {selectors} from "../cities";

const OFFERS_STORE_KEY = `offers`;

const SortTypes = [
  // Оставляем в том порядке в котором данные пришли с сервера
  {
    label: `Popular`,
    value: `popular`,
  },
  // По возрастанию цены
  {
    label: `Price: low to high`,
    value: `asc_price`,
  },
  // По убыванию цены
  {
    label: `Price: high to low`,
    value: `desc_price`,
  },
  // По убыванию рейтинга
  {
    label: `Top rated first`,
    value: `top`,
  },
];

function sorting(sort, itemsIds, items) {
  switch (sort) {
    case `asc_price`:
      return itemsIds.sort((a, b) => {
        const aItem = items[a];
        const bItem = items[b];

        return aItem.price - bItem.price;
      });
    case `desc_price`:
      return itemsIds.sort((a, b) => {
        const aItem = items[a];
        const bItem = items[b];

        return bItem.price - aItem.price;
      });
    case `top`:
      return itemsIds.sort((a, b) => {
        const aItem = items[a];
        const bItem = items[b];

        return bItem.rating - aItem.rating;
      });
    default:
      return itemsIds;
  }
}

function getOffersState(state) {
  return state[OFFERS_STORE_KEY] || {};
}

function getOffersIdsMap(state) {
  return getOffersState(state).offersIdsMap;
}

function getOfferCardsMap(state) {
  return getOffersState(state).offerCardsMap;
}

const getOffersIds = createSelector([
  selectors.getSelectedCity,
  getSort,
  getOffersIdsMap,
  getOfferCardsMap
], (city, sort, offersIdsMap, items) => {
  const itemsIds = offersIdsMap[city.id];

  return itemsIds ? sorting(sort.value, [...itemsIds], items) : null;
});

function getOffersCount(state) {
  return getOffersIds(state).length;
}

function getNeightboursIdsMap(state) {
  return getOffersState(state).neightboursIdsMap;
}

function getSort(state) {
  return getOffersState(state).sort;
}

function getFavoritesOffersIdsMap(state) {
  return getOffersState(state).favoritesOffersIdsMap;
}

export {
  OFFERS_STORE_KEY,
  SortTypes,
  getOffersState,
  getOffersIdsMap,
  getOfferCardsMap,
  getOffersIds,
  getOffersCount,
  getNeightboursIdsMap,
  getSort,
  getFavoritesOffersIdsMap,
};
