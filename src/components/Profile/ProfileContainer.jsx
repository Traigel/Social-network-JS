import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUsersProfileTC } from "../../redux/profile-reducer";
import Profile from "./Profile";
import * as axios from "axios";
import { withAuthRedirectHoc } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersProfileTC(2);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(connect(mapStateToProps, { getUsersProfileTC }),
withAuthRedirectHoc
)(ProfileContainer);

// let AuthRedirectComponentHoc = withAuthRedirectHoc(ProfileContainer);
// export default connect(mapStateToProps, { getUsersProfileTC })(AuthRedirectComponentHoc);
