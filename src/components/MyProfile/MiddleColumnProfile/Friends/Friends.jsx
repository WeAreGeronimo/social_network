import React from 'react';
import _css from './Friends.module.css';
import FriendItem from './Peoples/FriendItem';

const Friends = (props) => {
  const friendItem = props.friendData.map((data) => (
    <FriendItem
      name={data.name}
      key={data.id}
      surname={data.surname}
    />
  ));
  return (
    <div className="friends_container">
      <div className={_css.blue_bar}>Друзья</div>
      <div className={_css.grey_bar}>
        <div className={_css.fr}>
          <a href="#">Друзья</a>
        </div>
        <div className={_css.all}>
          <a href="#">Все</a>
        </div>
      </div>
      <div className={_css.grid_f_friends}>{friendItem}</div>
    </div>
  );
};

export default Friends;
