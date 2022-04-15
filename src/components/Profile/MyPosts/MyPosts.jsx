import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let postData = [
  { id: 1, message: "Hi, how are you?", likesCount: 39 },
  { id: 2, message: "It's my first post", likesCount: 14 },
  { id: 3, message: "Yo", likesCount: 21 },
];

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
