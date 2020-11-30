import React from 'react';
import _css from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={_css.message}>
      <div className={_css.text_bubble}>{props.message_text}</div>
      <div className={_css.time}>{props.message_text_time}</div>
    </div>
  );
};

export default MessageItem;
