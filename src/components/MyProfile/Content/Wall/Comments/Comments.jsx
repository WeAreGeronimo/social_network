import React, { useEffect, useRef, useState } from 'react';
import _css from './Comments.module.css';
import Like from '../../../../../assets/Like/LikeSmall';
import DeleteButton from '../../../../../assets/DeleteImageSvg/Delete';

const CommentsItem = (props) => {
  const [likesCountComment, setlikesCountComment] = useState(
    props.likes.length,
  );
  const [BooleanCom, setBooleanCom] = useState(
    props.likes.includes(props.AuthUserId),
  );
  const deletePost = () => {
    props.DeleteCommentTh(props.commentId, props.postId);
  };
  const [deleteShow, setDeleteShow] = useState(_css.deleteBlockNone);

  const [focusDeleteIcon, setFocusDeleteIcon] = useState(false);

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
            <span>{props.whenTime}</span>{' '}
          </div>
          <div className={_css.like}>
            {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
            <span
              role="button"
              onClick={() => {
                setBooleanCom(!BooleanCom);
                props.ToggleLikeComment(props.commentId);
                setlikesCountComment(
                  BooleanCom
                    ? likesCountComment - 1
                    : likesCountComment + 1,
                );
              }}
              aria-label="Like Button"
            >
              <Like thisPostLiked={BooleanCom} />
            </span>

            <span>
              {likesCountComment === 0 ? null : likesCountComment}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsItem;
