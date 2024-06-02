import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1476889932_zakat-derevo.jpg"></img>
      </div>
      <div>
        {/* <img src="https://klike.net/uploads/posts/2023-01/1674365337_3-31.jpg"></img> */}
        avatar + discription
      </div>
      <div>
        my posts
        <div>
          new posts
        </div>
        <div className={classes.Posts}>
          <div className={classes.Item}>post1</div>
          <div className={classes.Item}>post2</div>
          </div>
        </div>
        <div></div>
    </div>
  );
};

export default Profile;
