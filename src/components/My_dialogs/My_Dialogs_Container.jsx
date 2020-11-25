import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { newMessageInDialog} from '../../redux/dialogs_reducer';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import MESSAGE_ITEM from './Messages/MessageItem';
import MY_DIALOGS from './My_Dialogs';
import PERSON from './Peoples/person';





const mapStateToProps = (state) => {
    return{
        dialogPage: state.dialogPage,
        messagesArray: state.dialogPage.messagesData.map(messages => <MESSAGE_ITEM message_text={messages.text_message} key={messages.id} message_text_time={messages.time} />),
        dialogsArray: state.dialogPage.dialogsData.map(dialogs => <PERSON name={dialogs.name} text={dialogs.text} key={dialogs.id} id={dialogs.id} />),

    }
}



export default compose(
    connect(mapStateToProps, {newMessageInDialog}),
    withAuthRedirect
)(MY_DIALOGS); 