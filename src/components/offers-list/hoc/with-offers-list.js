import {connect} from "react-redux";

import {
  selectors as offersSelectors,
  thunks,
} from "Project/redux/offers";
import {
  selectors as authSelectors
} from "Project/redux/auth";

function mapStateToProps(state) {
  return {
    items: offersSelectors.getOfferCardsMap(state),
    auth: authSelectors.getAuthStatus(state),
  };
}

const mapDispatchToProps = {
  changeFavoriteStatus: thunks.changeFavoriteStatus,
};

export default connect(mapStateToProps, mapDispatchToProps);
