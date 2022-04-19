import React from "react";
import { NavLink } from "react-router-dom";
import classes from'./Friend.module.css';

const Friend = (props) => {
  return (
    <div className={classes.item} >
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" />
      {props.name}
    </div>
  );
};

export default Friend;
