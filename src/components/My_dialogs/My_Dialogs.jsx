import React from 'react';
import MESSAGE_ITEM from './Messages/MessageItem';
import _css from './My_Dialogs.module.css';
import PERSON from './Peoples/person';




const MY_DIALOGS = (props) => {

    let dialogsArray = props.state.dialogsData.map ( dialogs => <PERSON name={dialogs.name} text={dialogs.text} id={dialogs.id}/> )

    let messagesArray = props.state.messagesData.map (messages => <MESSAGE_ITEM message_text={messages.text_message} message_text_time={messages.time}/>)

    let refTextArea = React.createRef(); 
    
    let func = () => {
        let text = refTextArea.current.value;
        alert(text);
    }


    return <div className={_css.container_dialogs}>
        <div className={_css.dialogs}>

            {dialogsArray}


        </div>
        <div className={_css.container_messages}>
                {messagesArray}
            <div className={_css.textarea_m}>
                <textarea ref={refTextArea}></textarea>
                <button onClick={func}>Отправить</button>
            </div>
        </div>
    </div>

}

export default MY_DIALOGS; 