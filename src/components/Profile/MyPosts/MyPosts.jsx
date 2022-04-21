import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (<Post message={p.message} likesCount={p.likesCount} />));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost (text);
  }

  return (
    <div className={classes.myPosts}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea ref= {newPostElement} ></textarea>
        </div>
        <div>
          <button onClick={ addPost } >Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
