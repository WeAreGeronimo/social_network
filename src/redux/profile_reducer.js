const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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

profile: null,
}



const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let timeNow = new Date().toLocaleTimeString().slice(0, -3);
      return {
        ...state,
        postData: [...state.postData, { id: 4, name: "Егор почти Крид", text_post: state.newPostText, time: "сегодня в " + timeNow, likes_q: 0, }],
        newPostText: "",
      };

    }

    case UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.newText}
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }

    default: return state;
  }
}



export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;