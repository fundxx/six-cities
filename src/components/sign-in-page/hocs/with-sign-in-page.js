import {connect} from "react-redux";

import {
  selectors,
  thunks,
} from "Project/redux/auth";

function mapStateToProps(state) {
  return {
    auth: selectors.getAuthStatus(state),
  };
}

const mapDispatchToProps = {
  onLogin: thunks.login,
};

export default connect(mapStateToProps, mapDispatchToProps);
