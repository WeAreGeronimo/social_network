const UPDATE_DIALOGS_MESSAGE = "UPDATE-DIALOGS-MESSAGE";
const NEW_MESSAGE_IN_DIALOG = "NEW-MESSAGE-IN-DIALOG";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case NEW_MESSAGE_IN_DIALOG:
            let newMessage = {
                id: 5,
                text_message: state.aloneMessage,
                time: "давно"
            };
            state.aloneMessage = '';
            state.messagesData.push(newMessage);
            
            return state;

        case UPDATE_DIALOGS_MESSAGE:
            state.aloneMessage = action.newTextM;
            return state;

        default: return state;
    }



}

export const updateDialogsMessage_Creater = (text) => {
    return {
      type: UPDATE_DIALOGS_MESSAGE,
      newTextM: text,
    }
  }
  
export const newMessageInDialog_Creater = () => {
    return {
      type: NEW_MESSAGE_IN_DIALOG,
    }
  }

export default dialogsReducer;