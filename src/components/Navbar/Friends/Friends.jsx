import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const Friends = (props) => {
  let friendsElements = props.friendsName.map((el) => (
    <Friend name={el.name} />
  ));
  return (
    <div>
      <div className={classes.item}>Friends</div>
      <div className={classes.friends}>{friendsElements}</div>
    </div>
  );
};

export default Friends;
