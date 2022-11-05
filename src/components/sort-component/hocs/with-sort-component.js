import {connect} from "react-redux";

import {
  selectors,
  actions,
} from "Project/redux/offers";

function mapStateToProps(state) {
  return {
    items: selectors.SortTypes,
    selectedItem: selectors.getSort(state),
  };
}

export default connect(mapStateToProps, {onChange: actions.changeSort});
