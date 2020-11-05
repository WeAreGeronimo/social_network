const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
  postData: [
  { id: 1, name: "Егор почти Крид", text_post: 'я наконец-то свободен от блэкстар', time: "сегодня в 20:31", likes_q: 201 },
  { id: 2, name: "Егор почти Крид", text_post: 'да здравствует реакт', time: "сегодня в 20:12", likes_q: 7 },
  { id: 3, name: "Егор почти Крид", text_post: 'да здравствует реакт2', time: "сегодня в 20:12", likes_q: 7 }
],

friendData: [
  { id: 1, name: "Егор", surname: "Крид" },
  { id: 2, name: "Edem", surname: "Qirimli" },
  { id: 3, name: "Витя", surname: "Витя" },
  { id: 4, name: "Гектор", surname: "Гик" },
  { id: 5, name: "Климентий", surname: "Ворошилов" },
  { id: 6, name: "Апостол", surname: "Первый" },
],

newPostText: '',
}


const profileReducer = (state = initialState, action) => {
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