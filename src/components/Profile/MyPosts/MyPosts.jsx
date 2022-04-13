import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' like='4'/>
        <Post message="It's my first post" like='9'/>

      </div>
    </div>
  );
};

export default MyPosts;
