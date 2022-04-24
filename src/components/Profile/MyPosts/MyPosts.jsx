import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.myPosts}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            placeholder="My post"
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
