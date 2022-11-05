export function toReducerOffersCards(data = []) {
  return data.reduce((acc, it) => {
    const cityName = it.city.name;
    const isFavorite = it[`is_favorite`];

    const getFavoriteValue = () => {
      if (!isFavorite) {
        return {};
      }

      if (isFavorite) {
        if (acc.favoritesOffersIdsMap[cityName]) {
          return {
            ...acc.favoritesOffersIdsMap,
            [cityName]: [
              ...acc.favoritesOffersIdsMap[cityName],
              it.id,
            ]
          };
        }

        return {
          ...acc.favoritesOffersIdsMap,
          [cityName]: [it.id],
        };
      }

      return acc.favoritesOffersIdsMap[cityName];
    };

    acc.cities = [
      ...acc.cities,
      {
        id: cityName,
        name: cityName,
      },
    ];

    acc = {
      ...acc,
      cities: acc.cities.reduce((items, item) => {
        items = items.find((city) => city.id === item.id) ? items : [...items, item];

        return items;
      }, [
        {
          id: cityName,
          name: cityName,
        },
      ]),
      favoriteCities: isFavorite
        ? [
          ...acc.favoriteCities,
          {
            id: cityName,
            name: cityName,
          },
        ].reduce((items, item) => {
          items = items.find((city) => city.id === item.id)
            ? items
            : [...items, item];

          return items;
        }, []) : acc.favoriteCities,
      offersIdsMap: {
        ...acc.offersIdsMap,
        [cityName]: acc.offersIdsMap[cityName] ? [
          ...acc.offersIdsMap[cityName],
          it.id,
        ] : [it.id],
      },
      favoritesOffersIdsMap: {...getFavoriteValue()},
      offerCardsMap: {
        ...acc.offerCardsMap,
        [it.id]: {
          ...it,
          host: {
            ...it.host,
            avatarUrl: it.host[`avatar_url`],
            isPro: it.host[`is_pro`],
          },
          isFavorite: it[`is_favorite`],
          isPremium: it[`is_premium`],
          maxAdults: it[`max_adults`],
          previewImg: it[`preview_image`],
        },
      },
    };

    return acc;
  }, {
    cities: [],
    favoriteCities: [],
    offersIdsMap: {},
    favoritesOffersIdsMap: {},
    offerCardsMap: {},
  });
}
