import {connect} from "react-redux";

import {
  selectors as offersSelectors,
  thunks as offersThunks,
} from "Project/redux/offers";
import {
  selectors as authSelectors,
} from "Project/redux/auth";
import {
  selectors as commentSelectors,
  thunks as commentThunks,
} from "Project/redux/comments";

function mapStateToProps(state) {
  return {
    nearbyOffersMap: offersSelectors.getNeightboursIdsMap(state),
    items: offersSelectors.getOfferCardsMap(state),
    email: authSelectors.getUserData(state, `email`),
    authStatus: authSelectors.getAuthStatus(state),
    commentsMap: commentSelectors.getCommentsMap(state),
  };
}

const mapDispatchToProps = {
  updateOfferCard: offersThunks.updateOfferCard,
  fetchCommentsList: commentThunks.fetchCommentsList,
  changeFavoriteStatus: offersThunks.changeFavoriteStatus,
  fetchNearbyOffers: offersThunks.fetchNearbyOffers,
  onSubmit: commentThunks.appendUserComment,
};

export default connect(mapStateToProps, mapDispatchToProps);
