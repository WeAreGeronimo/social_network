import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newMessageInDialog_Creater, updateDialogsMessage_Creater} from '../../redux/dialogs_reducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import MESSAGE_ITEM from './Messages/MessageItem';
import MY_DIALOGS from './My_Dialogs';
import PERSON from './Peoples/person';





const mapStateToProps = (state) => {
    return{
        dialogPage: state.dialogPage,
        value: state.dialogPage.aloneMessage,
        messagesArray: state.dialogPage.messagesData.map(messages => <MESSAGE_ITEM message_text={messages.text_message} key={messages.id} message_text_time={messages.time} />),
        dialogsArray: state.dialogPage.dialogsData.map(dialogs => <PERSON name={dialogs.name} text={dialogs.text} key={dialogs.id} id={dialogs.id} />),

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessChange: (text) => {
            dispatch(updateDialogsMessage_Creater(text))
        },
        newMessageInDialog: () => {
            dispatch(newMessageInDialog_Creater())
        },
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MY_DIALOGS); 