import React, { useEffect, useRef, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Posts/Posts';
import _css from './Wall.module.css';

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
  console.log(props);
  const LikesToggle = (value) => {
    return props.ToggleLikeWall(value);
  };

  const onSubmit = (formData) => {
    const whenTime = new Date().toLocaleTimeString().slice(0, -3);
    props.putPostInApi(formData.textPost, whenTime, props.profile.id);
  };

  return (
    <div>
      <WallReduxForm onSubmit={onSubmit} />
      <div className={_css.sorting_post}>
        {props?.posts.map((postInformation) => (
          <Post
            AuthUserId={props.AuthUserId}
            name={postInformation.name}
            nickname={postInformation.nickname}
            surname={postInformation.surname}
            postId={postInformation.postId}
            text={postInformation.text}
            whenTime={postInformation.whenTime}
            key={postInformation.id}
            comments={postInformation.comments}
            likesLength={postInformation.likes.length}
            likes={postInformation.likes}
            ToggleLike={LikesToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Wall;
