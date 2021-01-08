import React, { useEffect, useRef, useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import _css from './Posts.module.css';
import Like from '../../../../../assets/Like/Like';
import CommentSvg from '../../../../../assets/CommentImageSvg/CommentImageSvg';
import CommentsItem from './Comments/Comments';
import { beautifulWhenTimeText } from '../../../../../common/TimeTextFunc';
import NextCommentsBar from './nextCommentsBar/nextCommentsBar';
import NextPostsBar from '../nextPostsBar/nextPostsBar';
import TrashCan from '../../../../../assets/trashCan/TrashCan';
import DeleteButton from '../../../../../assets/DeleteImageSvg/Delete';

const FormForComments = (props) => {
  return (
    <form className={_css.formCom} onSubmit={props.handleSubmit}>
      <div className={_css.comments_textarea}>
        <div className={_css.avatar}>
          <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
        </div>
        <Field
          className={_css.textarea}
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

const POST = (props) => {
  const ComentsReduxForm = reduxForm({ form: 'CommentsForm' })(
    FormForComments,
  );
  const initialTimeValue = beautifulWhenTimeText(props.whenTime);
  const [time, setTime] = useState(initialTimeValue);
  const oldTimerForPost = useRef(null);
  const updateTimeInSeconds = 1000;

  useEffect(() => {
    clearInterval(oldTimerForPost.current);
    oldTimerForPost.current = setInterval(() => {
      setTime(beautifulWhenTimeText(props.whenTime));
    }, updateTimeInSeconds);
  }, [props.whenTime]);

  const onSubmit = (formData) => {
    const whenTime = Date.now();
    props.putCommentPostInApi(
      formData.textComment,
      whenTime,
      props.AuthUserId,
      props.postId,
    );
  };
  const [sendCommentMode, setSendCommentMode] = useState(false);
  const LikesToggleComments = (value) => {
    return props.ToggleLikeComment(value);
  };
  const [deleteShowPost, setDeleteShowPost] = useState(
    _css.deleteBlockNone,
  );
  const countUnloadedComments = props.commentsCountInApi - 3;
  const countOfLoadsCom = Math.ceil(countUnloadedComments / 3);
  let userHaveASomeComments = false;
  const [allCommentsAreShowed, setAllCommentsAreShowed] = useState(
    false,
  );
  const [deleteModePost, setDeleteModePost] = useState(false);
  const deletePost = () => {
    props.deletePost(props.postId);
    setDeleteModePost(false);
  };
  const [nextComments, setNextComments] = useState(0);
  if (props.commentsCountInApi !== 0) {
    userHaveASomeComments = true;
  }
  props.comments.sort(function (a, b) {
    return a.commentId - b.commentId;
  });
  let itsMyWall = false;
  let itsYourPost = false;
  if (props.AuthUserId === props.whoseWall) {
    itsMyWall = true;
  }
  if (props.AuthUserId === props.from) {
    itsYourPost = true;
  }
  let checkRightsForDeletingPost = false;
  if (itsMyWall || itsYourPost) {
    checkRightsForDeletingPost = true;
  }

  return deleteModePost ? (
    <div className={_css.wrap_delete}>
      <span className={_css.deleteMessage}>
        Пост будет безвозвратно удален.
      </span>
      <div className={_css.deleteBlock}>
        <div className={_css.cancelBlock_button}>
          <span
            onClick={() => {
              setDeleteModePost(false);
            }}
          >
            Отменить
          </span>
        </div>
        <div className={_css.deleteBlock_button}>
          <span onClick={deletePost}>Удалить</span>
        </div>
      </div>{' '}
    </div>
  ) : (
    <div className={_css.Post}>
      <div className={_css.avatar}>
        <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
      </div>
      <div
        className={_css.name_time_area}
        onPointerEnter={(e) => {
          setDeleteShowPost(_css.deleteBlockDisplay);
        }}
        onPointerLeave={(e) => {
          setDeleteShowPost(_css.deleteBlockNone);
        }}
      >
        <div className={_css.name_surname}>
          <a href="#">
            {props.name} {props.nickname} {props.surname}{' '}
          </a>{' '}
          написал:
        </div>
        <div className={_css.deleteDiv}>
          {checkRightsForDeletingPost && (
            <span
              className={deleteShowPost}
              onClick={() => setDeleteModePost(true)}
            >
              <DeleteButton />
            </span>
          )}
        </div>
        <div className={_css.time}>{time}</div>
      </div>
      <div className={_css.post_text}>{props.text}</div>
      <div className={_css.container}>
        <div className={_css.hrefs}>
          <div className={_css.multiBar}>
            <div className={_css.commentSvg}>
              {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
              <span
                role="button"
                onClick={() => {
                  setSendCommentMode(!sendCommentMode);
                }}
                aria-label="Comment Button"
              >
                <CommentSvg sendCommentMode={sendCommentMode} />
              </span>
              <span className={_css.commentCount}>
                {' '}
                {props.commentsCountInApi === 0
                  ? null
                  : props.commentsCountInApi}
              </span>
            </div>
            <div className={_css.likes}>
              {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
              <span
                role="button"
                onClick={() => {
                  props.ToggleLike(props.postId);
                }}
                aria-label="Like Button"
              >
                <Like
                  thisPostLiked={props.likes.includes(
                    props.AuthUserId,
                  )}
                />
              </span>
              <span className={_css.likesQuantity}>
                {props.likes.length === 0 ? null : props.likes.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={_css.commentBlock}>
        {/* eslint-disable-next-line array-callback-return */}
        {props?.comments.map((commentEl) => (
          <CommentsItem
            whoseWall={props.whoseWall}
            from={commentEl.from}
            AuthUserId={props.AuthUserId}
            postId={props.postId}
            commentId={commentEl.commentId}
            name={commentEl.name}
            nickname={commentEl.nickname}
            surname={commentEl.surname}
            whenTime={commentEl.whenTime}
            textComment={commentEl.textComment}
            likes={commentEl.likes}
            ToggleLikeComment={LikesToggleComments}
            DeleteCommentTh={props.DeleteCommentTh}
          />
        ))}
        {sendCommentMode ? (
          <ComentsReduxForm onSubmit={onSubmit} />
        ) : null}
        {userHaveASomeComments && (
          <NextCommentsBar
            commentsCountInApi={props.commentsCountInApi}
            allCommentsAreShowed={allCommentsAreShowed}
            nextComments={nextComments}
            countOfLoadsCom={countOfLoadsCom}
            setNextComments={setNextComments}
            setAllCommentsAreShowed={setAllCommentsAreShowed}
            postId={props.postId}
            getNextPostsComments={props.getNextPostsComments}
          />
        )}{' '}
        {/* {!userHaveASomeComments && ( */}
        {/*  <div>Пользователь не добавил ни одного поста...</div> */}
        {/* )} */}
      </div>
    </div>
  );
};

export default POST;
