import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import _css from './MyDialogs.module.css';

const FormForDialogs = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={_css.textarea_m}>
        <Field name={'textMessage'} component={'textarea'} />
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

const MY_DIALOGS = (props) => {
  const dialogsArray = props.dialogsArray;

  if (props.isAuth === false) {
    return <Redirect to={'/login'} />;
  }

  const onSubmit = (formData) => {
    props.newMessageInDialog(formData.textMessage);
  };

  return (
    <div className={_css.container_dialogs}>
      <div className={_css.dialogs}>{dialogsArray}</div>
      <div className={_css.container_messages}>
        {props.messagesArray}
        <DialogsReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const DialogsReduxForm = reduxForm({ form: 'DialogForm' })(
  FormForDialogs,
);

export default MY_DIALOGS;
