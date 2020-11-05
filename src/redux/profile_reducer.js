const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: "Егор почти Крид",
                text_post: state.newPostText,
                time: "13:31",
                likes_q: 0,
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default: return state;
    }

}

export const AddPost_Creater = () => {
    return {
      type: ADD_POST,
    }
  }
  
  export const updateNewPostText_Creater = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    }
  }

  
export default profileReducer;