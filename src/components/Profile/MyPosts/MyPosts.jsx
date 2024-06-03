import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    
      <div>
        my posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={classes.Posts}>
         <Post message = "Message 1" likesCount = "12"/>
         <Post message = "Message 2" likesCount = "20"/>
          </div>
        </div>
  );
};

export default MyPosts;
