import {useEffect, useCallback, useState} from "react";
import {useParams, useHistory} from "react-router-dom";

function useOfferPage(props) {
  const {authStatus, updateOfferCard, fetchCommentsList, fetchNearbyOffers, changeFavoriteStatus} = props;
  const id = Number(useParams().id);
  const [fetching, setFetching] = useState(true);
  const history = useHistory();

  const handleFavoriteChange = useCallback((value) => {
    if (authStatus) {
      changeFavoriteStatus(value);
    } else {
      history.push(`/login`);
    }
  });

  useEffect(() => {
    updateOfferCard(id).then(() => {
      setFetching(false);
    });
  }, [id, updateOfferCard]);

  useEffect(() => {
    fetchCommentsList(id);
  }, [id, fetchCommentsList]);

  useEffect(() => {
    fetchNearbyOffers(id);
  }, [id, fetchNearbyOffers]);

  return {
    id,
    fetching,
    onFavoriteChange: handleFavoriteChange,
  };
}

export default useOfferPage;
