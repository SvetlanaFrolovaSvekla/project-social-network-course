import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.Item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"></img>
      {/* post1 */}
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
