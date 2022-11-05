import {connect} from "react-redux";

import {
  selectors as offerSelectors,
  thunks,
} from "Project/redux/offers";
import {
  selectors as authSelectors,
} from "Project/redux/auth";

function mapStateToProps(state) {
  return {
    offersIds: offerSelectors.getOffersIds(state),
    authStatus: authSelectors.getAuthStatus(state),
    email: authSelectors.getUserData(state, `email`),
  };
}

const mapDispatchToProps = {
  fetchOffersList: thunks.fetchOffersList,
};

export default connect(mapStateToProps, mapDispatchToProps);
