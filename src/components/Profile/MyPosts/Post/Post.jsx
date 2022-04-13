import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" />
      {props.message}
      <div>
      <span>like</span> {props.likesCount}
    </div>
    </div>
  );
};

export default Post;
