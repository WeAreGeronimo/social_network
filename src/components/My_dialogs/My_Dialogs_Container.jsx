import React from 'react';
import { newMessageInDialog_Creater, updateDialogsMessage_Creater} from '../../redux/dialogs_reducer';
import MESSAGE_ITEM from './Messages/MessageItem';
import MY_DIALOGS from './My_Dialogs';
import PERSON from './Peoples/person';





const My_dialogs_container = (props) => {
   

    let dialogsArray = props.store.getState().dialogPage.dialogsData.map ( dialogs => <PERSON name={dialogs.name} text={dialogs.text} id={dialogs.id}/> )

    let messagesArray = props.store.getState().dialogPage.messagesData.map (messages => <MESSAGE_ITEM message_text={messages.text_message} message_text_time={messages.time}/>)

    

    let onMessChange = (text) => {
        
     
        props.store.dispatch(
            updateDialogsMessage_Creater(text)
        )

        
    }

    let newMessageInDialog = () => {

        props.store.dispatch( 
            newMessageInDialog_Creater()
         )
         
    }
    

    return <MY_DIALOGS 
    onMessChange={onMessChange} 
    value={props.store.getState().dialogPage.dialogsData.aloneMessage} 
    newMessageInDialog={newMessageInDialog} dialogsArray={dialogsArray} 
    messagesArray={messagesArray}/>
    

}

export default My_dialogs_container; 