import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 39 },
  { id: 2, message: "It's my first post", likesCount: 14 },
];

let postElements = posts.map ((m) => <Post message={m.message} likesCount={m.likesCount} /> )

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
        {postElements}
      </div>
    </div>
  );
};

export default MyPosts;
