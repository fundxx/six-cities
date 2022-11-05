import {
  selectCity,
  storeCities,
} from "./actions";
import {
  SELECT_CITY,
  STORE_CITIES,
} from "./action-types";

describe(`Cities action creators work correctly`, () => {
  it(`Action creator for select city returns correct action`, () => {
    const city = {
      id: `Paris`,
      name: `Paris`,
    };
    const expectedAction = {
      type: SELECT_CITY,
      payload: city,
    };

    expect(selectCity(city)).toEqual(expectedAction);
  });

  it(`Action creator for store cities returns correct action`, () => {
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
    const expectedAction = {
      type: STORE_CITIES,
      payload: cities,
    };

    expect(storeCities(cities)).toEqual(expectedAction);
  });
});
