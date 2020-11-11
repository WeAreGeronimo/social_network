import React from 'react';
import _css from './My_Dialogs.module.css';





const MY_DIALOGS = (props) => {
    let refDialogArea = React.createRef();
let dialogsArray = props.dialogsArray;
    let onMessChange = () => {
        let text = refDialogArea.current.value;
        props.onMessChange(text)
    }


    return <div className={_css.container_dialogs}>
        <div className={_css.dialogs}>

            {dialogsArray}


        </div>
        <div className={_css.container_messages}>
                {props.messagesArray}
            <div className={_css.textarea_m}>
                <textarea onChange={onMessChange} ref={refDialogArea} value={props.value}></textarea>
                <button onClick={props.newMessageInDialog}>Отправить</button>
            </div>
        </div>
    </div>

}

export default MY_DIALOGS; 