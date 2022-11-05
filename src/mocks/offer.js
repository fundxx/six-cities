const Username = `john_doe@gmail.com`;

const MainTitle = `312 places to stay in Amsterdam`;

const Sort = [
  {
    label: `Popular`,
    value: `Popular`,
  },
  {
    label: `Price: low to high`,
    value: `asc_price`,
  },
  {
    label: `Price: high to low`,
    value: `desc_price`,
  },
  {
    label: `Top rated first`,
    value: `top`,
  },
];

const OfferCards = [
  {
    id: 1,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`,
    },
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    isFavorite: false,
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    type: `Apartment`,
  },
  {
    id: 2,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: false,
      name: `Angelina`,
    },
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    previewImage: `img/room.jpg`,
    price: 80,
    isFavorite: true,
    isPremium: false,
    rating: 4,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    title: `Wood and stone place`,
    maxAdults: 4,
    type: `Private room`,
  },
  {
    id: 3,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`,
    },
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    previewImage: `img/apartment-02.jpg`,
    price: 132,
    isPremium: false,
    isFavorite: false,
    rating: 4,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    title: `Canal View Prinsengracht`,
    maxAdults: 4,
    type: `Apartment`,
  },
  {
    id: 4,
    isPremium: true,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    isFavorite: false,
    rating: 5,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`,
    },
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
  },
  {
    id: 5,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: `Amsterdam`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`,
    },
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    previewImage: `img/room.jpg`,
    isPremium: true,
    price: 80,
    isFavorite: false,
    rating: 4,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Private room`,
  },
];

const FavoritesList = [
  {
    city: `Amsterdam`,
    id: `11`,
    items: [
      {
        id: 2,
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198,
            zoom: 10,
          },
          name: `Amsterdam`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 3,
          isPro: true,
          name: `Angelina`,
        },
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        previewImage: `img/room.jpg`,
        price: 80,
        isFavorite: true,
        isPremium: false,
        rating: 4,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
        title: `Wood and stone place`,
        maxAdults: 4,
        type: `Private room`,
      },
      {
        id: 3,
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10,
          },
          name: `Amsterdam`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 3,
          isPro: true,
          name: `Angelina`,
        },
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        previewImage: `img/room.jpg`,
        price: 80,
        isFavorite: true,
        isPremium: false,
        rating: 4,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
        title: `Wood and stone place`,
        maxAdults: 4,
        type: `Private room`,
      },
    ],
  },
  {
    city: `Cologne`,
    id: `22`,
    items: [
      {
        id: 4,
        bedrooms: 3,
        city: {
          location: {
            latitude: 52.369553943508,
            longitude: 4.85309666406198,
            zoom: 10,
          },
          name: `Amsterdam`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 3,
          isPro: true,
          name: `Angelina`,
        },
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        previewImage: `img/room.jpg`,
        price: 80,
        isFavorite: true,
        isPremium: false,
        rating: 4,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
        title: `Wood and stone place`,
        maxAdults: 4,
        type: `Private room`,
      },
    ]
  },
];

const CitiesList = [
  {
    id: `111`,
    name: `Paris`,
  },
  {
    id: `222`,
    name: `Cologne`,
  },
  {
    id: `333`,
    name: `Brussels`,
  },
  {
    id: `444`,
    name: `Amsterdam`,
  },
  {
    id: `555`,
    name: `Hamburg`,
  },
  {
    id: `666`,
    name: `Dusseldorf`,
  },
];

const Reviewers = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Max`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Min`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 3,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Mox`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 4,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Mix`,
    },
  },
  {
    comment: `Test`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 5,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 4,
      isPro: true,
      name: `Mex`,
    },
  },
];

export {
  Username,
  MainTitle,
  Sort,
  OfferCards,
  FavoritesList,
  CitiesList,
  Reviewers,
};
