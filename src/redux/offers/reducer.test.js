import reducer, {initialState} from "./reducer";
import {
  changeSort,
  storeHotelData,
  storeOffers,
  updateOffer,
  storeFavoriteData,
} from "./actions";

describe(`Auth reducer work correctly`, () => {
  const offerCard = {id: 1, isFavorite: false};
  const offerCardsMap = {
    1: offerCard,
  };
  const offersIdsMap = {
    Paris: [1],
  };
  const favoritesOffersIdsMap = offersIdsMap;

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should store favorite data`, () => {
    expect(reducer(initialState, storeFavoriteData({offerCardsMap, favoritesOffersIdsMap}))).toEqual({
      ...initialState,
      offerCardsMap,
      favoritesOffersIdsMap,
    });
  });

  it(`Reducer should store hotel data`, () => {
    expect(reducer(initialState, storeHotelData({offersIdsMap, offerCardsMap}))).toEqual({
      ...initialState,
      offersIdsMap,
      offerCardsMap,
    });
  });

  it(`Reducer should store offers`, () => {
    expect(reducer(initialState, storeOffers(offersIdsMap, offerCardsMap))).toEqual({
      ...initialState,
      offersIdsMap,
      offerCardsMap,
    });
  });

  it(`Reducer should update offer card by "id"`, () => {
    const state = {
      ...initialState,
      offerCardsMap: {
        1: offerCard,
      },
    };
    const expectedDataCard = {
      id: 1,
      isFavorite: true,
    };

    expect(reducer(state, updateOffer(expectedDataCard, 1))).toEqual({
      ...initialState,
      offerCardsMap: {
        1: expectedDataCard,
      },
    });
  });

  it(`Reducer should change sort option by value`, () => {
    const sort = {
      label: `Price: low to high`,
      value: `asc_price`,
    };

    expect(reducer(initialState, changeSort(sort))).toEqual({
      ...initialState,
      sort,
    });
  });
});
