import React from "react";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = function () {
//   return (
//     <storeContext.Consumer>
//       {
//         (store) => {
//         let state = store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             postData={state.profilePage.postData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }
//       }
//     </storeContext.Consumer>
//   );
// };

let mapStateToProps= (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToPops= (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);

    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToPops)(MyPosts);
export default MyPostsContainer;
