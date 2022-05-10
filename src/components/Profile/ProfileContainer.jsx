import React from "react";
import { connect } from "react-redux";
import { getUsersProfileTC } from "../../redux/profile-reducer";
import Profile from "./Profile";
import * as axios from "axios";

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

export default connect(mapStateToProps, { getUsersProfileTC })(ProfileContainer);
