import React from 'react';
import { Field, reduxForm } from 'redux-form';
import _css from './InputModule.module.css';

const FormForComment = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={_css.textarea}>
        <Field
          className={_css.textareaComment}
          name={'textComment'}
          component={'textarea'}
        />
      </div>
      <div className={_css.buttons}>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

const CommentReduxForm = reduxForm({ form: 'CommentForm' })(
  FormForComment,
);

const InputModule = (props) => {
  const onSubmit = (formData) => {
    const whenTime = new Date().toLocaleTimeString().slice(0, -3);
    props.PutCommentInApi(
      props.postId,
      props.AuthUserId,
      whenTime,
      formData.textComment,
    );
  };
  return (
    <div className={_css.inputModuleWrapper}>
      <div className={_css.avatar}>
        <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
      </div>
      <CommentReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default InputModule;
