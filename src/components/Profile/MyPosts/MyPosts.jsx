import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = function (props) {
    let postsElements = props.postData.map( p => <Post message= {p.message} likeCounts={p.likeCounts}/>) ;

    let newPostElement = React.createRef();
    
    let onAddPost = () => {
      props.addPost()
        
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        
    }
  return (
    <div className={classes.general}>
      <h3>My posts</h3>
      <div className={classes.textButton}>
        <textarea onChange={ onPostChange } ref={newPostElement} 
        value={props.newPostText}/>
        <button onClick={ onAddPost }>publish</button>
      </div>
      
      <div className={classes.posts}>
         {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
