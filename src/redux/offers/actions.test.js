import {
  changeSort,
  storeHotelData,
  storeOffers,
  updateOffer,
  storeFavoriteData,
  storeNearbyOffers,
} from "./actions";
import {
  CHANGE_SORT,
  STORE_HOTEL_DATA,
  STORE_OFFERS,
  UPDATE_OFFER,
  STORE_FAVORITE_DATA,
  STORE_NEARBY_OFFERS,
} from "./action-types";

describe(`Offers action creators work correctly`, () => {
  const cities = [
    {
      id: `Paris`,
      name: `Paris`,
    },
    {
      id: `Amsterdam`,
      name: `Amsterdam`,
    },
  ];
  const [city] = cities;
  const offersIdsMap = {
    Paris: [1],
    Amsterdam: [2],
  };
  const offerCardsMap = {
    1: {id: 1},
    2: {id: 2},
  };
  const favoritesOffersIdsMap = offersIdsMap;

  it(`Action creator for change sort returns correct action`, () => {
    const sort = {
      label: `popular`,
      value: `popular`,
    };
    const expectedAction = {
      type: CHANGE_SORT,
      payload: sort,
    };

    expect(changeSort(sort)).toEqual(expectedAction);
  });

  it(`Action creator for store hotel data returns correct action`, () => {
    const data = {
      city,
      cities,
      offersIdsMap,
      offerCardsMap,
    };
    const expectedAction = {
      type: STORE_HOTEL_DATA,
      payload: data,
    };

    expect(storeHotelData(data)).toEqual(expectedAction);
  });

  it(`Action creator for store offers returns correct action`, () => {
    const expectedAction = {
      type: STORE_OFFERS,
      payload: {
        offersIdsMap,
        offerCardsMap,
      },
    };

    expect(storeOffers(offersIdsMap, offerCardsMap)).toEqual(expectedAction);
  });

  it(`Action creator for update offers returns correct action`, () => {
    const expectedAction = {
      type: UPDATE_OFFER,
      payload: {id: 1},
      meta: 1,
    };

    expect(updateOffer({id: 1}, 1)).toEqual(expectedAction);
  });

  it(`Action creator for store favorite data returns correct action`, () => {
    const data = {
      cities,
      favoritesOffersIdsMap,
      offerCardsMap,
    };
    const expectedAction = {
      type: STORE_FAVORITE_DATA,
      payload: data,
    };

    expect(storeFavoriteData(data)).toEqual(expectedAction);
  });

  it(`Action creator for store nearby data returns correct action`, () => {
    const data = {
      offersIdsMap,
      offerCardsMap,
    };
    const expectedAction = {
      type: STORE_NEARBY_OFFERS,
      payload: data,
      meta: 1,
    };

    expect(storeNearbyOffers(data, 1)).toEqual(expectedAction);
  });
});
