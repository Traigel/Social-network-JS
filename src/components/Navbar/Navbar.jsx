import React from "react";
import FriendsContainer from "./Friends/FriendsContainer";
import Nav from "./Nav/Nav";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.nav}>
      <Nav />
      {/* <FriendsContainer store={props.store} /> */}
    </div>
  );
};

export default Navbar;
