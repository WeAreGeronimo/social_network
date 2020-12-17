import React, { useEffect, useRef, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Posts/Posts';
import _css from './Wall.module.css';
import { putPostInApi } from '../../../../redux/profile_reducer';
import { profileAPI } from '../../../api/api';

const FormForWall = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={_css.wall_textarea}>
        <Field
          className={_css.textarea}
          name={'textPost'}
          component={'textarea'}
        />
      </div>
      <div className={_css.buttons}>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

const WallReduxForm = reduxForm({ form: 'WallForm' })(FormForWall);

const Wall = (props) => {
  useEffect(() => {
    const idsArray = [];
    // eslint-disable-next-line array-callback-return
    props.profile.posts.map((info) => {
      idsArray.push(info.from);
    });
  }, []);
  const onSubmit = (formData) => {
    const whenTime = new Date().toLocaleTimeString().slice(0, -3);
    props.putPostInApi(formData.textPost, whenTime, props.profile.id);
  };
  // eslint-disable-next-line no-debugger
  debugger;
  return (
    <div>
      <WallReduxForm onSubmit={onSubmit} />
      <div className={_css.sorting_post}>
        {props?.posts.map((postInformation) => (
          <Post
            name={postInformation.name}
            nickname={postInformation.nickname}
            surname={postInformation.surname}
            postId={postInformation.postId}
            text={postInformation.text}
            whenTime={postInformation.whenTime}
            key={postInformation.id}
            likes={postInformation.likes.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Wall;
