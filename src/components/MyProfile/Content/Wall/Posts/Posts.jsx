import React, { useEffect, useRef, useState } from 'react';
import _css from './Posts.module.css';
import Like from '../../../../../assets/Like/Like';
import CommentSvg from '../../../../../assets/CommentImageSvg/CommentImageSvg';
import { profileAPI } from '../../../../api/api';
import { beautifulWhenTimeText } from '../../../../../common/TimeTextFunc';
import CommentsItem from '../Comments/Comments';
import InputModuleContainer from './inputComment/InputModuleContainer';

const POST = (props) => {
  const [Boolean, setBoolean] = useState(
    props.likes.includes(props.AuthUserId),
  );
  const [likesCount, setlikesCount] = useState(props.likesLength);
  return (
    <div className={_css.Post}>
      <div className={_css.avatar}>
        <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
      </div>
      <div className={_css.name_time_area}>
        <div className={_css.name_surname}>
          <a href="#s">
            {props.name} {props.nickname} {props.surname}{' '}
          </a>{' '}
          написал:
        </div>
        <div className={_css.time}>{props.whenTime}</div>
      </div>
      <div className={_css.post_text}>{props.text}</div>
      <div className={_css.container}>
        <div className={_css.hrefs}>
          <div className={_css.multiBar}>
            <div className={_css.commentSvg}>
              <CommentSvg />
            </div>
            <div className={_css.likes}>
              {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
              <span
                role="button"
                onClick={() => {
                  setBoolean(!Boolean);
                  props.ToggleLike(props.postId);
                  setlikesCount(
                    Boolean ? likesCount - 1 : likesCount + 1,
                  );
                }}
                aria-label="Like Button"
              >
                <Like thisPostLiked={Boolean} />
              </span>
              <span className={_css.likesQuantity}>
                {likesCount === 0 ? null : likesCount}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={_css.commentBlock}>
        {/* eslint-disable-next-line array-callback-return */}
        {props.comments?.map((commentEl) => {
          return <CommentsItem name={commentEl.from} />;
        })}
      </div>
    </div>
  );
};

export default POST;
