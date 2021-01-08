import React from 'react';
import _css from './nextPostsBar.module.css';
import AllPostsAreShowed from './allPostsAreShowed';

const NextPostsBar = (props) => {
  if (props.postsLength <= 5) {
    props.setAllPostAreShowed(true);
  }
  return (
    <div>
      {!props.allPostAreShowed && (
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
          <span>Загрузить еще...</span>
        </div>
      )}
      {/* {props.allPostAreShowed && <AllPostsAreShowed />} */}
    </div>
  );
};

export default NextPostsBar;
