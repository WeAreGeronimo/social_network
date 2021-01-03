import React, { useEffect, useRef, useState } from 'react';
import _css from './Comments.module.css';
import Like from '../../../../../assets/Like/LikeSmall';
import DeleteButton from '../../../../../assets/DeleteImageSvg/Delete';
import { beautifulWhenTimeText } from '../../../../../common/TimeTextFunc';

const CommentsItem = (props) => {
  const deletePost = () => {
    props.DeleteCommentTh(props.commentId, props.postId);
  };
  const [deleteShow, setDeleteShow] = useState(_css.deleteBlockNone);
  const [focusDeleteIcon, setFocusDeleteIcon] = useState(false);
  const oldTimerForComment = useRef(null);
  const initialTimeValueComment = beautifulWhenTimeText(
    props.whenTime,
  );
  const [timeComment, setTimeComment] = useState(
    initialTimeValueComment,
  );
  const updateTimeInSeconds = 1000;

  useEffect(() => {
    clearInterval(oldTimerForComment);
    oldTimerForComment.current = setInterval(() => {
      setTimeComment(beautifulWhenTimeText(props.whenTime));
    }, updateTimeInSeconds);
  }, [props.whenTime]);

  return (
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
            <span
              className={deleteShow}
              onPointerEnter={(e) => {
                setFocusDeleteIcon(true);
              }}
              onPointerLeave={(e) => {
                setFocusDeleteIcon(false);
              }}
              onClick={deletePost}
            >
              <DeleteButton focusDeleteIcon={focusDeleteIcon} />
            </span>
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
