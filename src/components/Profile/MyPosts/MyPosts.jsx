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
         <Post />
          </div>
        </div>
  );
};

export default MyPosts;
