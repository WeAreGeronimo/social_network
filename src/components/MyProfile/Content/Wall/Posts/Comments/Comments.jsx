import React, { useEffect, useRef, useState } from 'react';
import _css from './Comments.module.css';
import Like from '../../../../../../assets/Like/LikeSmall';
import DeleteButton from '../../../../../../assets/DeleteImageSvg/Delete';
import { beautifulWhenTimeText } from '../../../../../../common/TimeTextFunc';

const CommentsItem = (props) => {
  const [deleteShow, setDeleteShow] = useState(_css.deleteBlockNone);
  const oldTimerForComment = useRef(null);
  const initialTimeValueComment = beautifulWhenTimeText(
    props.whenTime,
  );
  const [timeComment, setTimeComment] = useState(
    initialTimeValueComment,
  );
  const updateTimeInSeconds = 1000;

  useEffect(() => {
    clearInterval(oldTimerForComment.current);
    oldTimerForComment.current = setInterval(() => {
      setTimeComment(beautifulWhenTimeText(props.whenTime));
    }, updateTimeInSeconds);
    return () => {
      clearInterval(oldTimerForComment.current);
    };
  }, [props.whenTime]);
  let itsYourWall = false;
  let itsYourComment = false;
  if (props.AuthUserId === props.whoseWall) {
    itsYourWall = true;
  }
  if (props.AuthUserId === props.from) {
    itsYourComment = true;
  }
  let checkRightsForDeleting = false;
  if (itsYourWall || itsYourComment) {
    checkRightsForDeleting = true;
  }
  const [deleteMode, setDeleteMode] = useState(false);
  const deleteComment = () => {
    props.DeleteCommentTh(props.commentId, props.postId);
    setDeleteMode(false);
  };
  return deleteMode ? (
    <div className={_css.wrap_delete}>
      <span className={_css.deleteMessage}>
        Комментарий будет безвозвратно удален.
      </span>
      <div className={_css.deleteBlock}>
        <div className={_css.cancelBlock_button}>
          <span
            onClick={() => {
              setDeleteMode(false);
            }}
          >
            Отменить
          </span>
        </div>
        <div className={_css.deleteBlock_button}>
          <span onClick={deleteComment}>Удалить</span>
        </div>
      </div>{' '}
    </div>
  ) : (
    <div
      className={_css.wrapper}
      onPointerEnter={(e) => {
        setDeleteShow(_css.deleteBlockDisplay);
      }}
      onPointerLeave={(e) => {
        setDeleteShow(_css.deleteBlockNone);
      }}
    >
      <div className={_css.avatar}>
        {' '}
        <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
      </div>
      <div className={_css.wrapper_body}>
        <div className={_css.upperBar}>
          <div className={_css.name_surname}>
            <a
              href={`http://react.app.com:3000/profile/${props.from}`}
            >
              {props.name} {props.nickname} {props.surname}
            </a>
          </div>
          <div className={_css.delete}>
            {checkRightsForDeleting && (
              <span
                className={deleteShow}
                onClick={() => {
                  setDeleteMode(true);
                }}
              >
                <DeleteButton />
              </span>
            )}
          </div>
        </div>
        <div className={_css.wrapper_bubble}>
          <div className={_css.comment_bubble}>
            {props.textComment}
          </div>
        </div>
        <div className={_css.bottomBlock}>
          <div className={_css.when}>
            {' '}
            <span>{timeComment}</span>{' '}
          </div>
          <div className={_css.like}>
            {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
            <span
              role="button"
              onClick={() => {
                props.ToggleLikeComment(props.commentId);
              }}
              aria-label="Like Button"
            >
              <Like
                thisPostLiked={props.likes.includes(props.AuthUserId)}
              />
            </span>

            <span>
              {props.likes.length === 0 ? null : props.likes.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsItem;
