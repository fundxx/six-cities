import {connect} from "react-redux";

import {
  selectors,
} from "Project/redux/offers";

function mapStateToProps(state) {
  return {
    items: selectors.getOfferCardsMap(state),
  };
}

export default connect(mapStateToProps);
