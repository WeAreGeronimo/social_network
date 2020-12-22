import React, { useEffect, useRef, useState } from 'react';
import _css from './Comments.module.css';
import Like from '../../../../../assets/Like/LikeSmall';

const CommentsItem = (props) => {
  return (
    <div className={_css.wrapper}>
      <div className={_css.avatar}>
        {' '}
        <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
      </div>
      <div className={_css.wrapper_body}>
        <div className={_css.name_surname}>
          {props.name} {props.nickname} {props.surname}
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
            <Like thisPostLiked={false} />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsItem;
