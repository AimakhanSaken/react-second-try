import React from "react";
import classes from "./Post.module.css";

const Post = function (props) {
  return (
    <div className={classes.item}>
      <div className={classes.avaMessage}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU"/>
      {props.message}
      </div>
      <div className={classes.like}>
        <span>likes</span>{props.likeCounts}
      </div>  
    </div>
  );
};

export default Post;
