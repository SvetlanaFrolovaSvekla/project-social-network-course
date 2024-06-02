import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.Item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"></img>
      post1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
