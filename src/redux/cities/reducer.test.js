import {actions as offerActions} from "../offers";
import reducer, {initialState} from "./reducer";
import {selectCity} from "./actions";

describe(`Cities reducer work correctly`, () => {
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

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should change selected city by a given value`, () => {
    expect(reducer(initialState, selectCity(city))).toEqual({
      ...initialState,
      selectedCity: city,
    });
  });

  it(`Reducer should store favorite cities when given favorite data`, () => {
    expect(reducer(initialState, offerActions.storeFavoriteData({cities}))).toEqual({
      ...initialState,
      favoriteCities: cities,
    });
  });

  it(`Reducer should store cities & selected city when given hotel data`, () => {
    expect(reducer(initialState, offerActions.storeHotelData({cities, city}))).toEqual({
      ...initialState,
      cities,
      selectedCity: city,
    });
  });
});
