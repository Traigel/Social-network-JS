import React from "react";
import Friends from "./Friends";

const FriendsContainer = (props) => {

  let sidebarPage = props.store.getState().sidebarPage;

  return <Friends sidebarPage={sidebarPage} />
};

export default FriendsContainer;
