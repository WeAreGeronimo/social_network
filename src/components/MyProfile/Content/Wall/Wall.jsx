import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import Post from './Posts/Posts';
import _css from './Wall.module.css';
import AllPostsAreShowed from './nextPostsBar/allPostsAreShowed';
import NextPostsBar from './nextPostsBar/nextPostsBar';
import PostsNextBarModule from './nextPostsBar/PostsNextBarModule';

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
  const LikesToggle = (value) => {
    return props.ToggleLikeWall(value);
  };
  const countUnloadedPost = props.profile.postsLength - 5;
  const countOfLoads = Math.ceil(countUnloadedPost / 5);
  const onSubmit = (formData) => {
    const whenTime = Date.now();
    props.putPostInApi(formData.textPost, whenTime, props.profile.id);
  };
  let userHaveASomePosts = false;
  const [allPostAreShowed, setAllPostAreShowed] = useState(false);

  const [nextPosts, setNextPosts] = useState(0);

  if (props.profile.postsLength !== 0) {
    userHaveASomePosts = true;
  }
  props.posts?.sort(function (a, b) {
    return a.whenTime - b.whenTime;
  });
  return (
    <div>
      <WallReduxForm onSubmit={onSubmit} />
      <div className={_css.sorting_post}>
        {props?.posts.map((postInformation) => (
          <Post
            commentsCountInApi={postInformation.commentsCountInApi}
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
            ToggleLikeComment={props.ToggleLikeComment}
            putCommentPostInApi={props.putCommentPostInApi}
            DeleteCommentTh={props.DeleteCommentTh}
            beautifulWhenTimeText={props.beautifulWhenTimeText}
          />
        ))}
      </div>
      {userHaveASomePosts && (
        <NextPostsBar
          postsLength={props.profile.postsLength}
          allPostAreShowed={allPostAreShowed}
          nextPosts={nextPosts}
          countOfLoads={countOfLoads}
          setNextPosts={setNextPosts}
          setAllPostAreShowed={setAllPostAreShowed}
          profileId={props.profile.id}
          getNextWallPosts={props.getNextWallPosts}
        />
      )}{' '}
      {!userHaveASomePosts && (
        <div>Пользователь не добавил ни одного поста...</div>
      )}
    </div>
  );
};

export default Wall;
