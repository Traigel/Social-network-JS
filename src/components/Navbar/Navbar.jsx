import React from "react";
import Friends from "./Friends/Friends";
import Nav from "./Nav/Nav";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.nav}>
      <Nav />
     {/* <Friends friendsName={props.state.friendsName} /> */}
    </div>
  );
};

export default Navbar;
