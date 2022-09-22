import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = function (props) {
  return (
    <div>
      <div className={classes.backCont}>
        <img src="https://img.lemde.fr/2022/07/12/79/0/2000/1000/768/384/75/0/4509b32_1657639447767-stsci-01g7etqtcaq2hbgghtycq53fgg.png" />
      </div>
      <div className={classes.logo}>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg" />
      </div>
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
