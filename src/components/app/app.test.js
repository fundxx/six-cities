import React from "react";
import * as redux from "react-redux";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {render, screen, waitFor} from "@testing-library/react";
import configureStore from "redux-mock-store";

import App from "./App";

const mockStore = configureStore({});

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

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainPage' when user navigate to '/' url`, async () => {
    const history = createMemoryHistory();
    const store = mockStore(initialState);
    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/1 places to stay/i)).toBeInTheDocument();
    });
  });

  it(`Render 'LoginPage' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    const store = mockStore(initialState);

    history.push(`/login`);
    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByRole(`button`)).toHaveTextContent(/Sign in/i);
  });

  it(`Render 'OfferPage' when user navigate to '/offer:id' url`, async () => {
    const history = createMemoryHistory();
    const store = mockStore(initialState);

    history.push(`/offer/1`);
    store.dispatch = () => Promise.resolve();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Canal View Prinsengracht/i)).toBeInTheDocument();
    });
  });

  it(`Render 'NotFoundPage' when user navigate to unknown url`, () => {
    const history = createMemoryHistory();
    const store = mockStore(initialState);

    history.push(`/unknown`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
