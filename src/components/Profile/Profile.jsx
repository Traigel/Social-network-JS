import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from'./Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=" />
      </div>
      <div>ava</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
