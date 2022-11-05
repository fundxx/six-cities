import React from "react";
import {renderHook} from "@testing-library/react-hooks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";

import useFavoritePage from "./use-favorite-page";

const mockStore = configureStore({});

redux.useDispatch = jest.fn().mockImplementation(() => () => jest.fn());

const initialState = {
  cities: {
    selectedCity: {
      name: `Paris`,
      id: `Paris`,
    },
    cities: [
      {
        name: `Paris`,
        id: `Paris`,
      },
    ],
  },
  offers: {
    sort: {
      label: `Popular`,
      value: `popular`,
    },
    neightboursIdsMap: {},
    offersIdsMap: {
      Paris: [1],
    },
    offerCardsMap: {
      1: {
        id: 1,
        bedrooms: 1,
        title: `Canal View Prinsengracht`,
        location: {
          latitude: 1,
          longitude: 1,
          zoom: 1,
        },
        description: ``,
        images: [``],
        goods: [`Baby seat`],
        type: `room`,
        host: {
          avatarUrl: ``,
          id: 1,
          name: ``,
          isPro: false,
        },
        rating: 1,
        price: 1,
        previewImg: ``,
        maxAdults: 1,
        city: {
          name: ``,
          location: {
            latitude: 1,
            longitude: 1,
            zoom: 1,
          },
        },
      },
    },
  },
  comments: {
    commentsMap: {
      1: [],
    },
  },
  auth: {
    auth: false,
    user: {
      email: ``,
    },
  },
  notifications: {
    items: [],
  },
};

describe(`useFavoritePage tests`, () => {
  it(`should return object with key length equal 5`, () => {
    const store = mockStore(initialState);
    const wrapper = ({children}) => (
      <redux.Provider store={store}>
        {children}
      </redux.Provider>
    );
    const {result} = renderHook(() => {
      return useFavoritePage();
    }, {
      wrapper,
    });
    const {current} = result;
    const params = current;

    expect(redux.useDispatch).toBeCalledTimes(1);
    expect(Object.keys(params)).toHaveLength(5);
  });
});
