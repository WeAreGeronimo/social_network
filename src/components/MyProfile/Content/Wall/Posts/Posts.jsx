import React from 'react';
import _css from './Posts.module.css';

const POST = (props) => {
  return (
    <div className={_css.Post}>
      <div className={_css.avatar}>
        <img src="https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" />
      </div>
      <div className={_css.name_time_area}>
        <div className={_css.name_surname}>
          <a href="#s">{props.name_surname}</a> написал:
        </div>
        <div className={_css.time}>{props.when_time}</div>
      </div>
      <div className={_css.post_text}>{props.message}</div>
      <div className={_css.container}>
        <div className={_css.hrefs}>
          <a href="#s">Удалить</a>
        </div>
        <div className={_css.likes}>
          <span>{props.likes_count}</span>
          <img src="https://cdn0.iconfinder.com/data/icons/user-interface-133/32/User_Interface_Icon_Set_14-512.png" />
        </div>
      </div>
    </div>
  );
};

export default POST;
