import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUsersProfileTC } from "../../redux/profile-reducer";
import Profile from "./Profile";
import * as axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersProfileTC(2);
  }

  render() {
    if (this.props.isAuth === false) return <Navigate to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUsersProfileTC })(ProfileContainer);
