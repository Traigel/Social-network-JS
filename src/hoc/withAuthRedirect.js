import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirectHoc = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isAuth === false) return <Navigate to={"/login"} />;

    return <Component {...props} />;
  };

  let ConnectedAuthRedirectComponentHoc = connect(mapStateToPropsRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponentHoc;
};


