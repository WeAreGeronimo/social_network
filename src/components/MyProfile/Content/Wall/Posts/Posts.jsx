import React from 'react';
import _css from './Posts.module.css';
import Like from '../../../../../assets/Like/Like';

const POST = (props) => {
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
          <a href="#s">Удалить</a>
        </div>
        <div className={_css.likes}>
          <span role="button" aria-label="Mute volume">
            <Like />
          </span>
          <span className={_css.likesQuantity}>
            {props.likes === 0 ? null : props.likes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default POST;
