const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
      { id: 1, message: "Hello World!", likeCounts:' 3 👍' },
      { id: 2, message: "It's my first post", likeCounts:' 10 👍' },
      { id: 3, message: "Blalal", likeCounts:' 0 👍' },
      { id: 4, message: "Tururuurrru", likeCounts:' 1 👍' },
      
    ],
  newPostText: 'Kkkk',  
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likeCounts: 0,
      };
      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }  
    case UPDATE_NEW_POST_TEXT: {
      let sateCopy = {...state};
      sateCopy.newPostText = action.newText;
      return sateCopy;
    }  
    default:
      return state;
  }
}


export let addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
export let updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text
    }
  }
export default profileReducer;