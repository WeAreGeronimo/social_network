const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_DIALOGS_MESSAGE = "UPDATE-DIALOGS-MESSAGE";
const NEW_MESSAGE_IN_DIALOG = "NEW-MESSAGE-IN-DIALOG";


let store = {


  _callSubscriber() { 
      console.log('hello');
    }, 


  _state: {

    profilePage: {
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

      newPostText: 'Anchor Value 1',

    },

    dialogPage: {
      dialogsData: [
        { id: 1, name: 'Edem Qirimli', text: 'Че делаешь?' },
        { id: 2, name: 'Гектор Гик', text: 'Почти смешно' },
        { id: 3, name: 'Павел Дуров', text: 'Как успехи?' },
        { id: 4, name: 'Витя Витя', text: 'ээ' },
        { id: 5, name: 'Алукард Вульф', text: 'не понял' },
      ],

      messagesData: [
        { id: 1, text_message: "Здравствуй!", time: "20:51:20" },
        { id: 2, text_message: "все продвигается довольно легко?", time: "20:51:25" },
        { id: 3, text_message: "еще бы", time: "20:51:32" },
        { id: 4, text_message: "ведь реакт для этого и создан)", time: "20:51:34" },
        { id: 5, text_message: "holder", time: "давно" },
      ],
      aloneMessage: "hello",
    },
  },

  getState() {
    return this._state;
  },

  // addPost() {
  //   let newPost = {
  //     id: 4,
  //     name: "Егор почти Крид",
  //     text_post: this._state.profilePage.newPostText,
  //     time: "13:31",
  //     likes_q: 0,
  //   };
  //   this._state.profilePage.postData.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText(newText){
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  // newMessageInDialog() {
  //   let newMessage = {
  //     id:5, 
  //     text_message: this._state.dialogPage.aloneMessage, 
  //     time: "давно" 
  //   };
  //   this._state.dialogPage.messagesData.push(newMessage);
  //   this._callSubscriber(this._state);
  // },

  // updateDialogsMessage(newTextM) {
  //   this._state.dialogPage.aloneMessage = newTextM;
  //   this._callSubscriber(this._state);
  // },

  subscribe(observer) {
    this._callSubscriber = observer 
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 4,
        name: "Егор почти Крид",
        text_post: this._state.profilePage.newPostText,
        time: "13:31",
        likes_q: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }

    else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }

    else if (action.type === "NEW-MESSAGE-IN-DIALOG") {
      let newMessage = {
        id:5, 
        text_message: this._state.dialogPage.aloneMessage, 
        time: "давно" 
      };
      this._state.dialogPage.messagesData.push(newMessage);
      this._state.dialogPage.aloneMessage = '';
      this._callSubscriber(this._state);
    }

    else if (action.type === "UPDATE-DIALOGS-MESSAGE") {
      this._state.dialogPage.aloneMessage = action.newTextM;
      this._callSubscriber(this._state);
    }


  },

}

export const AddPost_actionCreater = () => {
  return {
    type: ADD_POST,
  }
}

export const updateNewPostText_actionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}


export const updateDialogsMessage_actionCreater = (text) => {
  return {
    type: UPDATE_DIALOGS_MESSAGE,
    newTextM: text,
  }
}

export const newMessageInDialog_actionCreater = () => {
  return {
    type: NEW_MESSAGE_IN_DIALOG,
  }
}


















export default store;