import React from 'react';
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
  const newPostEl = props.postData.map((postInformation) => (
    <Post
      name_surname={postInformation.name}
      when_time={postInformation.time}
      message={postInformation.text_post}
      key={postInformation.id}
      likes_count={postInformation.likes_q}
    />
  ));

  const onSubmit = (formData) => {
    props.addPost(formData.textPost);
  };

  return (
    <div>
      <WallReduxForm onSubmit={onSubmit} />
      <div className={_css.sorting_post}>{newPostEl}</div>
    </div>
  );
};

export default Wall;
