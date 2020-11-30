const NEW_MESSAGE_IN_DIALOG = 'NEW-MESSAGE-IN-DIALOG';

const initialState = {
  dialogsData: [
    { id: 1, name: 'Edem Qirimli', text: 'Че делаешь?' },
    { id: 2, name: 'Гектор Гик', text: 'Почти смешно' },
    { id: 3, name: 'Павел Дуров', text: 'Как успехи?' },
    { id: 4, name: 'Витя Витя', text: 'ээ' },
    { id: 5, name: 'Алукард Вульф', text: 'не понял' },
  ],

  messagesData: [
    { id: 1, text_message: 'Здравствуй!', time: '20:51:20' },
    {
      id: 2,
      text_message: 'все продвигается довольно легко?',
      time: '20:51:25',
    },
    { id: 3, text_message: 'еще бы', time: '20:51:32' },
    {
      id: 4,
      text_message: 'ведь реакт для этого и создан)',
      time: '20:51:34',
    },
    { id: 5, text_message: 'holder', time: 'давно' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE_IN_DIALOG: {
      const timeNow = new Date().toLocaleTimeString();
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 5, text_message: action.newMessage, time: timeNow },
        ],
      };
    }

    default:
      return state;
  }
};

// export const newMessageInDialog = (newMessage) => {return { type: NEW_MESSAGE_IN_DIALOG, newMessage}}
export const newMessageInDialog = (newMessage) => ({
  type: NEW_MESSAGE_IN_DIALOG,
  newMessage,
});

export default dialogsReducer;
