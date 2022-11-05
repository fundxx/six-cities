import {connect} from "react-redux";

import {selectors} from "Project/redux/auth";

function mapStateToProps(state) {
  return {
    authStatus: selectors.getAuthStatus(state),
  };
}

export default connect(mapStateToProps);
