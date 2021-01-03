import React from 'react';
import _css from './nextCommentsBar.module.css';

const NextCommentsBar = (props) => {
  return (
    <div>
      <div
        className={_css.nextBlock}
        onClick={() => {
          props.getNextWallPosts(props.profileId, props.nextPosts);
          if (props.nextPosts + 1 < props.countOfLoads) {
            props.setNextPosts(props.nextPosts + 1);
          } else if (props.nextPosts + 1 === props.countOfLoads) {
            props.setAllPostAreShowed(true);
          }
        }}
      >
        <span>Показать следующие комментарии</span>
      </div>
    </div>
  );
};

export default NextCommentsBar;
