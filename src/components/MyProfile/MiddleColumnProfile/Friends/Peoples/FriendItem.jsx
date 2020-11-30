import React from 'react';
import _css from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <div className={_css.item_container}>
      <div className={_css.friends_avatar}>
        <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" />
      </div>
      <div className={_css.name_surname}>{props.name}</div>
      <div className={_css.name_surname}>{props.surname}</div>
    </div>
  );
};

export default FriendItem;
