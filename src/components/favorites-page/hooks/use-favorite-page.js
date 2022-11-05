
import {useCallback, useEffect} from "react";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  selectors as authSelectors,
} from "Project/redux/auth";
import {
  thunks as offersThunks,
  selectors as offersSelectors,
} from "Project/redux/offers";
import {
  selectors as citiesSelectors,
} from "Project/redux/cities";

function useFavorite() {
  const email = useSelector((state) => authSelectors.getUserData(state, `email`));
  const cities = useSelector(citiesSelectors.getFavoriteCities);
  const offersCardsMap = useSelector(offersSelectors.getOfferCardsMap);
  const offersIdsMap = useSelector(offersSelectors.getFavoritesOffersIdsMap);
  const dispatch = useDispatch();
  const handleFavoriteChange = useCallback((id) => {
    dispatch(offersThunks.changeFavoriteStatus(id)).then(() => {
      dispatch(offersThunks.fetchFavorites());
    });
  }, [offersThunks]);

  useEffect(() => {
    dispatch(offersThunks.fetchFavorites());
  }, []);

  return {email, cities, offersCardsMap, offersIdsMap, handleFavoriteChange};
}

export default useFavorite;
