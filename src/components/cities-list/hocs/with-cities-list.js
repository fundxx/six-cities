import {connect} from "react-redux";

import {
  actions,
  selectors,
} from "Project/redux/cities";

function mapStateToProps(state) {
  return {
    items: selectors.getCities(state),
    selectedItem: selectors.getSelectedCity(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(item) {
      dispatch(actions.selectCity(item));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
